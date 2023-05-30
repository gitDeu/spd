
    const generateBtn = document.getElementById('generateBtn');
    const generatedText = document.getElementById('generatedText');
    const sentences = [
"Gemeinsam schaffen wir eine bessere Zukunft für alle Menschen in unserer Gesellschaft.",
"Mit unseren Ideen und unserem Einsatz setzen wir uns für soziale Gerechtigkeit ein.",
"Jeder von uns kann einen wertvollen Beitrag leisten, um positive Veränderungen herbeizuführen.",
"Wir stehen für eine starke Demokratie und engagieren uns für die Rechte aller Bürgerinnen und Bürger.",
"In der Vielfalt unserer Gesellschaft liegt unsere Stärke und unsere gemeinsame Zukunft.",
"Mit Mut und Entschlossenheit gehen wir voran und verwirklichen unsere Vision einer gerechten Gesellschaft.",
"Bildung ist der Schlüssel zur persönlichen Entfaltung und zur Schaffung von Chancengleichheit.",
"Wir setzen uns für faire Arbeitsbedingungen ein und kämpfen gegen Lohnungleichheit und Ausbeutung.",
"Unsere Umwelt liegt uns am Herzen, daher engagieren wir uns für einen nachhaltigen Schutz der Natur.",
"Jeder Mensch hat das Recht auf ein sicheres Zuhause und wir setzen uns für bezahlbaren Wohnraum ein.",
"Solidarität ist unsere Stärke - gemeinsam können wir die Herausforderungen unserer Zeit bewältigen.",
"In einer inklusiven Gesellschaft haben alle Menschen die gleichen Rechte und Möglichkeiten.",
"Fairness und Gerechtigkeit sind unsere Prinzipien, die wir in allen Bereichen vorantreiben.",
"Wir setzen uns für eine bessere Gesundheitsversorgung ein, die für alle zugänglich und bezahlbar ist.",
"Mit unserem Einsatz und unserer Zusammenarbeit können wir positive Veränderungen erreichen.",
"Wir stehen für eine gerechte Verteilung des Wohlstands und setzen uns gegen soziale Ungleichheit ein.",
"Die Zukunft gehört uns und gemeinsam gestalten wir sie zu einer besseren und gerechteren Welt.",
"Wir nehmen die Anliegen der Menschen ernst und setzen uns für ihre Interessen ein.",
"Unsere Politik basiert auf den Werten von Offenheit, Respekt und gelebter Demokratie.",
"Mit Verantwortungsbewusstsein und Weitsicht gestalten wir eine nachhaltige Zukunft für kommende Generationen.",
"Wir stehen für gleiche Rechte und Chancen für alle Geschlechter und sexuelle Orientierungen.",
"In einer solidarischen Gesellschaft kümmern wir uns füreinander und lassen niemanden zurück.",
"Bildung ist der Schlüssel zur persönlichen Entfaltung und zur Schaffung von Zukunftsperspektiven.",
"Gemeinsam setzen wir uns für gute Arbeitsbedingungen und faire Löhne ein.",
"Unsere Jugend ist unsere Zukunft - wir investieren in ihre Bildung und ihre Entwicklung.",
"Mit Dialog und Zusammenarbeit können wir Lösungen finden, die allen zugutekommen.",
"Unsere Ideen und Visionen bringen frischen Wind in die Politik und begeistern Menschen.",
"Wir setzen uns für eine offene und tolerante Gesellschaft ein, in der Vielfalt geschätzt wird.",
"Chancengleichheit und Teilhabe sind für uns zentrale Anliegen, die wir vorantreiben.",
"Wir setzen uns für eine menschenwürdige Pflege im Alter und setzen uns für gute Bedingungen ein.",
"Mit Engagement und Leidenschaft können wir gemeinsam positive Veränderungen herbeiführen.",
"Wir setzen uns für gleiche Chancen und gleiche Bezahlung von Frauenund Männern ein.",
"Gemeinsam schaffen wir hochwertige Betreuungsangebote, die Familien unterstützen und entlasten.",
"Wir stehen für eine humanitäre Asyl- und Flüchtlingspolitik, die Menschenrechte schützt.",
"Mit klaren Zielen und innovativen Strategien gestalten wir eine nachhaltige Mobilität der Zukunft.",
"Wir setzen uns für eine gerechte Steuerpolitik ein, die Wohlstand fair verteilt.",
"Gemeinsam schaffen wir eine lebenswerte Umwelt für kommende Generationen und schützen unsere Natur.",
"Wir stehen für eine moderne und inklusive Arbeitswelt, die Raum für persönliche Entfaltung bietet.",
"Mit Transparenz und Bürgernähe stärken wir das Vertrauen in die Politik und ermöglichen Mitbestimmung.",
"Wir setzen uns für eine starke europäische Gemeinschaft ein und fördern internationale Zusammenarbeit.",
"Gemeinsam kämpfen wir für gleiche Rechte und gegen Diskriminierung in allen Formen.",
"Wir stehen für eine effektive Klimapolitik und setzen uns aktiv für den Schutz unseres Planeten ein.",
"Mit Innovation und Kreativität gestalten wir die digitale Zukunft und nutzen ihre Chancen für alle."
];

    function generateRandomText() {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      generatedText.innerHTML = `<mark class="highlight">${sentences[randomIndex]}</mark>`;
    }

    generateBtn.addEventListener('click', generateRandomText);
