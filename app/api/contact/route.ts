import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Celaris team
    const { data, error } = await resend.emails.send({
      from: 'Celaris Tech <contact-info@celaristech.com>',
      to: ['info@celaristech.com'],
      replyTo: email,
      subject: `New Contact Form: ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Send confirmation email to client
    await resend.emails.send({
      from: 'Celaris Tech <contact-info@celaristech.com>',
      to: [email],
      subject: 'Thanks for contacting Celaris Tech',
      html: buildClientEmailHtml(name, service),
    });

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function buildClientEmailHtml(name: string, service: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f5f7fa;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7fa;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e5a96 0%, #164272 100%);padding:32px 40px;text-align:center;">
              <img src="https://celaristech.com/dark-mode-logo.png" alt="Celaris Tech" width="48" height="48" style="margin-bottom:12px;" />
              <h1 style="color:#ffffff;font-size:22px;margin:0;font-weight:700;">Celaris Tech</h1>
              <p style="color:#00bcd4;font-size:13px;margin:4px 0 0;letter-spacing:0.5px;">AWS Cloud, Data & DevOps Solutions</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 20px;">
              <p style="color:#1a1f2e;font-size:16px;margin:0 0 20px;">Hi <strong>${name}</strong>,</p>
              <p style="color:#4a5568;font-size:15px;line-height:1.7;margin:0 0 20px;">
                Thank you for reaching out to Celaris Tech. We've received your inquiry regarding
                <strong style="color:#1e5a96;">${service}</strong>, and our team is reviewing your message carefully.
              </p>
              <p style="color:#4a5568;font-size:15px;line-height:1.7;margin:0 0 24px;">
                At Celaris Tech, we specialize in:
              </p>
            </td>
          </tr>

          <!-- Services -->
          <tr>
            <td style="padding:0 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 16px;background-color:#f0f7ff;border-radius:8px 8px 0 0;border-bottom:1px solid #e2e8f0;">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td style="font-size:18px;padding-right:10px;">📊</td>
                      <td>
                        <strong style="color:#1e5a96;font-size:14px;">Data & Analytics</strong>
                        <span style="color:#64748b;font-size:13px;"> – modern data platforms, BI, and scalable analytics architectures</span>
                      </td>
                    </tr></table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f0f7ff;border-bottom:1px solid #e2e8f0;">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td style="font-size:18px;padding-right:10px;">☁️</td>
                      <td>
                        <strong style="color:#1e5a96;font-size:14px;">Cloud Migrations</strong>
                        <span style="color:#64748b;font-size:13px;"> – secure, structured transitions to AWS</span>
                      </td>
                    </tr></table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f0f7ff;border-bottom:1px solid #e2e8f0;">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td style="font-size:18px;padding-right:10px;">⚡</td>
                      <td>
                        <strong style="color:#1e5a96;font-size:14px;">DevOps & Automation</strong>
                        <span style="color:#64748b;font-size:13px;"> – CI/CD, infrastructure as code, and operational efficiency</span>
                      </td>
                    </tr></table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f0f7ff;border-radius:0 0 8px 8px;">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td style="font-size:18px;padding-right:10px;">🎧</td>
                      <td>
                        <strong style="color:#1e5a96;font-size:14px;">Contact Centers</strong>
                        <span style="color:#64748b;font-size:13px;"> – Amazon Connect implementations, integrations, and optimization</span>
                      </td>
                    </tr></table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Highlight -->
          <tr>
            <td style="padding:0 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#f0fdfa;border-left:4px solid #00bcd4;padding:16px 20px;border-radius:0 8px 8px 0;">
                    <p style="color:#1a1f2e;font-size:14px;line-height:1.6;margin:0;">
                      Since your interest is in <strong style="color:#1e5a96;">${service}</strong>, we'll tailor our response specifically around that area and how it can support your business goals.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Follow-up -->
          <tr>
            <td style="padding:0 40px 32px;">
              <p style="color:#4a5568;font-size:15px;line-height:1.7;margin:0 0 16px;">
                You can expect a personalized follow-up within the next <strong>24–48 hours</strong>.
              </p>
              <p style="color:#4a5568;font-size:15px;line-height:1.7;margin:0;">
                If your request is urgent, feel free to reply directly to this email with additional details.
              </p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding:0 40px 36px;">
              <a href="https://celaristech.com" style="display:inline-block;background-color:#1e5a96;color:#ffffff;text-decoration:none;padding:12px 32px;border-radius:8px;font-size:14px;font-weight:600;">
                Visit celaristech.com
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#1a1f2e;padding:28px 40px;text-align:center;">
              <p style="color:#94a3b8;font-size:13px;margin:0 0 4px;font-weight:600;">Celaris Tech</p>
              <p style="color:#64748b;font-size:12px;margin:0;">AWS Cloud, Data & DevOps Solutions</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
