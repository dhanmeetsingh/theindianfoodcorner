import { motion } from 'motion/react';
import React from 'react';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="h-64 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/restaurant.png)' }}>
          <div className="absolute inset-0 bg-bg-dark/80"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">
            <span className="text-secondary-gold">Datenschutz</span>
          </h1>
          <p className="text-xl text-text-muted">Datenschutzerklärung</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-bg-medium rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-8 text-text-light">

            {/* Introduction */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">1. Datenschutz auf einen Blick</h2>
              <div className="space-y-4 text-text-muted">
                <h3 className="text-lg font-semibold text-text-light">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                  Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">2. Datenerfassung auf dieser Website</h2>
              
              <div className="space-y-6 text-text-muted">
                <div>
                  <h3 className="text-lg font-semibold text-text-light mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-light mb-3">Wie erfassen wir Ihre Daten?</h3>
                  <p className="mb-3">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
                    Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p>
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                    IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
                    Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-light mb-3">Wofür nutzen wir Ihre Daten?</h3>
                  <p>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                    Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden, sofern Sie dem zugestimmt haben.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-light mb-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                  <p className="mb-2">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                    oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
                    können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
                  </p>
                  <p>
                    Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer 
                    personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen 
                    Aufsichtsbehörde zu.
                  </p>
                </div>
              </div>
            </div>

            {/* Responsible Party */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">3. Hinweis zur verantwortlichen Stelle</h2>
              <div className="text-text-muted space-y-4">
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="bg-bg-dark rounded-xl p-6">
                  <p className="font-semibold text-text-light">The Indian Food Corner</p>
                  <p>Ankush Soni</p>
                  <p>Schwieberdinger Str. 37</p>
                  <p>70435 Stuttgart</p>
                  <p className="mt-3">Telefon: <a href="tel:+491723894934" className="text-secondary-gold hover:underline">+49 172 389 4934</a></p>
                  <p>E-Mail: <a href="mailto:info@spicecraft.de" className="text-secondary-gold hover:underline">info@spicecraft.de</a></p>
                </div>
                <p className="mt-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
                  über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>
            </div>

            {/* Storage Duration */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">4. Speicherdauer</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                  Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
                  berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
                  werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
                  Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); 
                  im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>
              </div>
            </div>

            {/* Legal Basis */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">5. Rechtsgrundlage für die Datenverarbeitung</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person 
                  einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
                </p>
                <p>
                  Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei 
                  die betroffene Person ist, erforderlich sind, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">6. Ihre Rechte</h2>
              <div className="text-text-muted space-y-4">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Berichtigungsrecht:</strong> Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Löschungsrecht:</strong> Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Einschränkung der Verarbeitung:</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Datenübertragbarkeit:</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                  <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.</li>
                  <li><strong>Widerruf der Einwilligung:</strong> Sie haben das Recht, Ihre erteilte Einwilligung jederzeit zu widerrufen.</li>
                  <li><strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
                </ul>
              </div>
            </div>

            {/* Server Log Files */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">7. Server-Log-Dateien</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mt-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
                  Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes 
                  Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen 
                  die Server-Log-Files erfasst werden.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">8. Kontaktformular</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Wenn Sie uns per Kontaktformular, E-Mail oder WhatsApp Anfragen zukommen lassen, werden Ihre Angaben aus 
                  dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage 
                  und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf 
                  Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags 
                  zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen 
                  beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns 
                  gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
                <p>
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, 
                  Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach 
                  abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere 
                  Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">9. Google Maps</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), 
                  Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p>
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese 
                  Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. 
                  Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                </p>
                <p>
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote 
                  und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein 
                  berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                </p>
                <p>
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary-gold hover:underline ml-1">
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">10. WhatsApp Kontakt</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Wir bieten Ihnen die Möglichkeit, uns über WhatsApp zu kontaktieren. Wenn Sie uns über WhatsApp 
                  kontaktieren, werden die von Ihnen übermittelten Daten (Name, Telefonnummer, Nachrichteninhalt) 
                  von WhatsApp Inc. verarbeitet.
                </p>
                <p>
                  Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern 
                  Sie diese erteilt haben, oder auf Grundlage unseres berechtigten Interesses an der Beantwortung Ihrer 
                  Anfrage (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p>
                  Weitere Informationen zum Datenschutz bei WhatsApp finden Sie unter: 
                  <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary-gold hover:underline ml-1">
                    https://www.whatsapp.com/legal/privacy-policy
                  </a>
                </p>
              </div>
            </div>

            {/* SSL/TLS Encryption */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">11. SSL- bzw. TLS-Verschlüsselung</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum 
                  Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. 
                  TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers 
                  von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, 
                  nicht von Dritten mitgelesen werden.
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">12. Änderungen dieser Datenschutzerklärung</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
                  Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, 
                  z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-secondary-gold/20">
              <p className="text-text-muted text-sm italic">
                Stand: Januar 2026
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}