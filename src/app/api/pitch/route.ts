import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Clients
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { founderName, email, startupName, website, stage, message, deckUrl } = body;

    // 1. Validation
    if (!founderName || !email || !startupName || !deckUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Database Record
    const { error: dbError } = await supabase
      .from('pitches')
      .insert([{ 
        founder_name: founderName, 
        email, 
        startup_name: startupName, 
        website,
        stage,
        pitch_deck_url: deckUrl, 
        message 
      }]);

    if (dbError) {
      console.error('Supabase Error:', dbError);
      return NextResponse.json({ error: 'Database Error' }, { status: 500 });
    }

    // 3. Professional "Deal Memo" Email
    const { error: emailError } = await resend.emails.send({
      from: 'Red Vanda Intake <onboarding@resend.dev>',
      
      // UPDATED: Hardcoded to your specific email
      to: 'info@redvanda.vc', 
      
      replyTo: email,
      subject: `Deal Flow: ${startupName} (${stage})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e4e4e7;">
            
            <tr>
              <td style="background-color: #0f172a; padding: 24px 32px;">
                <h1 style="color: #ffffff; font-size: 18px; font-weight: 700; letter-spacing: 1px; margin: 0; text-transform: uppercase;">
                  Red Vanda <span style="font-weight: 300; color: #94a3b8;">Partners</span>
                </h1>
                <p style="color: #64748b; font-size: 11px; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.5px;">New Deal Submission</p>
              </td>
            </tr>

            <tr>
              <td style="padding: 32px;">
                
                <h2 style="color: #0f172a; font-size: 24px; font-weight: 700; margin: 0 0 24px 0;">
                  ${startupName}
                </h2>

                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
                  <tr>
                    <td width="50%" style="padding-bottom: 20px; vertical-align: top;">
                      <p style="margin: 0 0 4px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Founder</p>
                      <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 500;">${founderName}</p>
                    </td>
                    <td width="50%" style="padding-bottom: 20px; vertical-align: top;">
                      <p style="margin: 0 0 4px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Stage</p>
                      <span style="display: inline-block; background-color: #fff7ed; color: #ea580c; border: 1px solid #ffedd5; padding: 4px 10px; border-radius: 99px; font-size: 11px; font-weight: 700; text-transform: uppercase;">
                        ${stage}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%" style="vertical-align: top;">
                      <p style="margin: 0 0 4px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Website</p>
                      <a href="${website}" style="color: #ea580c; font-size: 15px; text-decoration: none; font-weight: 500;">Visit URL &rarr;</a>
                    </td>
                    <td width="50%" style="vertical-align: top;">
                      <p style="margin: 0 0 4px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Contact</p>
                      <a href="mailto:${email}" style="color: #0f172a; font-size: 15px; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                </table>

                <hr style="border: 0; border-top: 1px solid #f4f4f5; margin: 0 0 24px 0;" />

                <p style="margin: 0 0 12px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Executive Summary</p>
                <div style="background-color: #f8fafc; border-left: 3px solid #ea580c; padding: 16px; border-radius: 4px; margin-bottom: 32px;">
                  <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6;">${message}</p>
                </div>

                <div style="text-align: center;">
                  <a href="${deckUrl}" style="display: inline-block; background-color: #0f172a; color: #ffffff; padding: 14px 36px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    Review Pitch Deck
                  </a>
                  <p style="margin: 12px 0 0 0; color: #94a3b8; font-size: 11px;">
                    Secure Link: <a href="${deckUrl}" style="color: #94a3b8; text-decoration: underline;">Open in Browser</a>
                  </p>
                </div>

              </td>
            </tr>

            <tr>
              <td style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e4e4e7;">
                <p style="margin: 0; color: #94a3b8; font-size: 11px; line-height: 1.5;">
                  CONFIDENTIALITY NOTICE: This notification contains deal flow information intended solely for the Investment Committee of Red Vanda Partners.
                </p>
              </td>
            </tr>
          </table>

        </body>
        </html>
      `,
    });

    if (emailError) {
      console.error('Resend Error:', emailError);
      // We continue because DB save was successful
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}