export type SatzungBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; intro?: string; items: string[] };

export type SatzungSection = {
  number: number;
  heading: string;
  title: string;
  blocks: SatzungBlock[];
};

export const satzungTitle = "Satzung für die Forstbetriebsgemeinschaft Schlaubetal" as const;

export const satzungSections: SatzungSection[] = [
  {
    number: 1,
    heading: "§ 1",
    title: "Name, Sitz und Rechtsform",
    blocks: [
      { type: "paragraph", text: "Der Verein führt den Namen: Forstbetriebsgemeinschaft Schlaubetal w. V." },
      { type: "paragraph", text: "Er hat seinen Sitz in Siedlung 18, 15848 Ragow-Merz" },
      { type: "paragraph", text: "Der Waldverein ist eine Forstbetriebsgemeinschaft (FBG) gemäß §§ 16 ff. des Bundeswaldgesetz (BWaldG) in der jeweils geltenden Fassung. Er soll/ist gemäß § 18 BWaldG durch die oberste Forstbehörde des Landes Brandenburg anerkannt werden/worden." },
      { type: "paragraph", text: "Der Waldverein ist eine juristische Person des Privatrechts in der Rechtsform des wirtschaftlichen Vereins gemäß § 22 des Bürgerlichen Gesetzbuches (BGB) in der jeweils geltenden Fassung. Ihm soll/ist durch die oberste Forstbehörde des Landes Brandenburg die Rechtsfähigkeit gemäß § 22 BGB in Verbindung mit § 19 BWaldG verliehen werden/worden." },
    ],
  },
  {
    number: 2,
    heading: "§ 2",
    title: "Zweck und Aufgaben",
    blocks: [
      { type: "paragraph", text: "Der Waldverein hat den Zweck, die Bewirtschaftung der angeschlossenen Waldflächen und der zur Aufforstung bestimmten Grundstücke zu verbessern. Insbesondere sollen die Nachteile geringer Flächengröße, ungünstiger Flächengestalt, der Besitzzersplitterung, der Gemengelage, des unzureichenden Waldaufschlusses und anderer Strukturmängel überwunden werden." },
      { type: "list", intro: "Der Waldverein hat insbesondere folgende Aufgaben:", items: ["Abstimmung der Betriebspläne oder Betriebsgutachten und der Wirtschaftspläne sowie der einzelnen forstlichen Vorhaben", "Abstimmung der für die forstwirtschaftliche Erzeugung wesentlichen Vorhaben und Absatz des Holzes oder sonstiger Forstprodukte", "Ausführung der Forstkulturen, Bodenverbesserungen und Bestandspflegearbeiten einschließlich des Forstschutzes", "Bau und Unterhaltung von Wegen", "Durchführung des Holzeinschlages, der Holzaufarbeitung und der Holzbringung", "Beratung der Mitglieder in allen forstlichen Angelegenheiten zu Selbstkosten", "gemeinschaftlicher Absatz des anfallenden Holzes", "Mithilfe bei der Verwertung sonstiger Walderzeugnisse", "Ermittlung von Waldarbeitern (Unternehmen) zur Durchführung forstwirtschaftlicher Maßnahmen", "gemeinschaftlicher Bezug von Forstpflanzen, Forstsaatgut, Forstschutz- und Düngemitteln, Zaunbaumaterial u. a. Betriebsbedürfnissen", "Durchführung sonstiger Maßnahmen, die der Wirtschaftlichkeit der angeschlossenen Betriebe unter Sicherung der nachhaltigen Holzerzeugung dienen", "Beschaffung und Einsatz von Maschinen und Geräten für mehrere der unter den Nummern 2 bis 5 zusammengefassten Maßnahmen", "Weiterbildung der Mitglieder durch Schulungen", "Beratung und Information der Mitglieder", "Öffentlichkeitsarbeit zu forstwirtschaftlichen Themen"] },
      { type: "paragraph", text: "Der Waldverein führt die unter Abs. 1 und Abs. 2 genannten Maßnahmen für die Mitglieder parzellenscharf durch, d.h. bezogen auf das jeweilige Grundstückseigentum bzw. die Nutzungsrechte des jeweiligen Mitglieds. Jedes Mitglied trägt die grundstücksbezogenen Kosten der Maßnahmen und erhält die entsprechenden Nettoerlöse nach Abzug der grundstücksbezogenen Kosten. Insbesondere verpflichtet sich das Mitglied zur Andienung des Holzes und sonstiger Forstprodukte auf den ihm gehörenden bzw. zur Nutzung überlassenen Grundstücken (§ 4 Abs. 2 Buchst. c) der Satzung). Die Einzelheiten der durchzuführenden Maßnahmen sind mit dem Mitglied vertraglich in der Weise zu regeln, dass das Mitglied Inhalt, Umfang, Dauer und Kosten der jeweiligen Maßnahme im Einzelnen nachvollziehen kann (Transparenzgebot)." },
    ],
  },
  {
    number: 3,
    heading: "§ 3",
    title: "Mitgliedschaft",
    blocks: [
      { type: "paragraph", text: "Die Aufnahme ist schriftlich zu beantragen. Über den Antrag entscheidet der Vorstand. Lehnt der Vorstand die Aufnahme ab, kann der Betroffene gegenüber dem Vorstand binnen einer Frist von einem Monat die Entscheidung der Mitgliederversammlung beantragen; diese ist durch den Vorstand innerhalb einer weiteren Frist von drei Monaten nach Zugang des Antrags des Betroffenen einzuberufen." },
      { type: "paragraph", text: "Die Mitgliedschaft endet durch Kündigung oder Ausschluss. Eine Kündigung bedarf der Schriftform (§ 126 Abs. 1 BGB). Die Mitgliedschaft kann frühestens zum Schluss des dritten vollen Geschäftsjahres nach Beitritt gekündigt werden. Die Kündigungsfrist beträgt ein Jahr; sie ist gegenüber dem Vorstand mit einer Frist von drei Monaten zum Schluss eines Kalenderjahres zu erklären." },
      { type: "paragraph", text: "Wenn Mitglieder ihre Pflichten wiederholt schuldhaft nicht erfüllen, können sie auf Antrag des Vorstandes durch Beschluss der Mitgliederversammlung ausgeschlossen werden. Vor der Beschlussfassung steht dem betreffenden Mitglied das Recht zu, sich in der Mitgliederversammlung zu der beabsichtigten Ausschließung zu äußern." },
      { type: "paragraph", text: "Beruht die Mitgliedschaft auf dem Eigentum an einem Grundstück, so ist sie vererblich; der Erbe ist berechtigt, innerhalb einer Frist von drei Monaten seit dem Erbfall seinen Austritt aus der Forstbetriebsgemeinschaft gegenüber dem Vorstand schriftlich zu erklären; § 11 Abs. 3 dieser Satzung gilt sinngemäß. Entsprechendes gilt für Erbengemeinschaften, die jedoch ihre Mitgliedschaftsrechte nur einheitlich durch einen Vertreter gegenüber der Forstbetriebsgemeinschaft ausüben können." },
      { type: "paragraph", text: "Die Mitgliedschaft kann zusammen mit dem Grundstück durch Rechtsgeschäft auch auf einen anderen übertragen werden; § 11 Abs. 3 dieser Satzung gilt sinngemäß. Wird sie bei der Veräußerung des Grundstücks nicht auf den Erwerber übertragen, hat dieser einen Rechtsanspruch auf Aufnahme in den Verein. Das gleiche gilt für den Erwerber eines Teiles der angeschlossenen Grundstücksfläche eines Mitglieds." },
      { type: "paragraph", text: "Die Regelungen in Abs. 4 und 5 gelten entsprechend, wenn die Mitgliedschaft auf einem vererbten oder übertragenen Nutzungsverhältnis an dem angeschlossenen Grundstück beruht." },
      { type: "paragraph", text: "Die zur Erfüllung von Zweck und Aufgaben der FBG notwenigen Daten können durch die FBG mit Zustimmung der Mitglieder gespeichert und verarbeitet werden. Die Weitergabe von personenbezogenen und einzelbetrieblichen Daten ist nur mit Zustimmung der jeweiligen Mitglieder und gemäß Beschluss der Mitgliederversammlung zulässig. Diese Daten werden ausschließlich für vereinsinterne Zwecke genutzt und nicht an Dritte weitergegeben. Zur Erfüllung seiner Aufgaben kann der Verein Einsicht in öffentliche Register nehmen. Sofern hiervon Daten von Vereinsmitgliedern betroffen sind, erklären diese ihr Einverständnis." },
    ],
  },
  {
    number: 4,
    heading: "§ 4",
    title: "Rechte und Pflichten der Mitglieder",
    blocks: [
      { type: "list", intro: "Jedes Mitglied hat das Recht,", items: ["an den Mitgliederversammlungen stimmberechtigt teilzunehmen", "die Einrichtungen des Waldvereins zu benutzen, sich an Veranstaltungen zu beteiligen und an allen Vorteilen und Erträgen teilzuhaben", "die Niederschriften über die Sitzungen der Vereinsorgane, die Jahresrechnung, die Pläne für Einzelaufgaben und das Mitgliederverzeichnis einzusehen", "Vorschläge zur Ausgestaltung und Verbesserung der Tätigkeit des Vereins zu machen, die vom Vorstand zu behandeln und zu beantworten sind"] },
      { type: "list", intro: "Jedes Mitglied hat die Pflicht,", items: ["die Belange des Waldvereins zu fördern und alles zu unterlassen, was den Interessen des Zusammenschlusses abträglich ist", "den Bestimmungen der Satzung zu folgen sowie den Beschlüssen der Organe des Waldvereins nachzukommen, insbesondere die beschlossenen Mitgliedsbeiträge, Umlagen und sonstige festgesetzte Entgelte pünktlich zu entrichten", "Holz und sonstige Forstprodukte, die der Andienungspflicht unterliegen, über den Waldverein vermarkten zu lassen", "die Beschaffung und den Einsatz von Maschinen, Geräten, Material und Unternehmerleistungen i.S. § 2 Abs. 2 Nr. 6 der Satzung durch den Waldverein vermitteln zu lassen"] },
      { type: "paragraph", text: "Änderungen der Besitz- und Eigentumsverhältnisse an den Waldflächen sind unverzüglich dem Vorstand mitzuteilen. Darüber hinaus sind die Mitglieder verpflichtet, Änderungen ihrer Anschrift, E-Mailadresse und Bankverbindung mitzuteilen." },
    ],
  },
  {
    number: 5,
    heading: "§ 5",
    title: "Vereinsstrafen",
    blocks: [
      { type: "paragraph", text: "Bei einem schuldhaften Verstoß gegen wesentliche Mitgliedspflichten kann der Vorstand eine Vereinsstrafe bis zur Höhe von 500,00 Euro verhängen. Das Mitglied kann gegen die Vereinsstrafe gegenüber dem Vorstand binnen einer Frist von einem Monat die Einberufung der Mitgliederversammlung beantragen; § 3 Abs. 2 S. 3 HS 2 der Satzung gilt entsprechend. Diese kann die Vereinsstrafe aufheben oder mildern." },
    ],
  },
  {
    number: 6,
    heading: "§ 6",
    title: "Organe des Waldvereins",
    blocks: [
      { type: "paragraph", text: "Organe des Waldvereins sind die Mitgliederversammlung und der Vorstand." },
    ],
  },
  {
    number: 7,
    heading: "§ 7",
    title: "Mitgliederversammlung",
    blocks: [
      { type: "list", intro: "Die Mitgliederversammlung regelt alle Angelegenheiten des Waldvereins durch Beschluss, soweit die Regelung nicht dem Vorstand übertragen ist. Die Mitgliederversammlung beschließt insbesondere über:", items: ["die Wahl und Abberufung des Vorsitzenden, des stellvertretenden Vorsitzenden und der weiteren Vorstandsmitglieder; des Versammlungsleiters und der Rechnungsprüfer", "Art und Umfang der Geschäftsführung", "die Andienungspflicht bei der Vermarktung von Holz und sonstigen Forstprodukten", "die Festsetzung von Beiträgen, Umlagen, Anteilseinlagen und sonstigen Entgelten", "den Erwerb, die Veräußerung und die Belastung von Grundstücken und die Aufnahme von Darlehen von mehr als 5.000,00 Euro, soweit diese Rechtsgeschäfte den Waldverein und nicht den Forstbetrieb der Mitglieder betreffen", "über Art und Umfang der durchzuführenden forstlichen Maßnahmen", "den jährlichen Wirtschafts- bzw. Haushaltsplan, den Jahres- und den Rechnungsprüfungsbericht und die Entlastung des Vorstandes und des Geschäftsführers (§ 9 Abs. 7 der Satzung)", "die Verwendung von Erträgen und Erlösen, soweit diese den Waldverein und nicht den Forstbetrieb der Mitglieder betreffen", "die Änderung der Satzung", "die Verfolgung von Rechtsansprüchen des Waldvereins gegen die Mitglieder des Vorstandes und die Wahl des zu diesem Zweck zu bestellenden besonderen Vertreters", "die Aufnahme von Mitgliedern in Fällen der Ablehnung durch den Vorstand i.S. § 3 Abs. 2 S. 3 der Satzung", "den Ausschluss von Mitgliedern", "die Grundsätze für den Einsatz von Angestellten und Arbeitern sowie eines Geschäftsführers", "die Beschaffung und Einsatz von Maschinen und Geräten mit einem Nettogeschäftswert (ohne gesetzliche Umsatzsteuer) von mehr als 5.000,00 Euro", "die Auflösung des Vereins"] },
      { type: "paragraph", text: "Die Mitgliederversammlung ist durch den Vorstand mindestens einmal jährlich einzuberufen. Sie ist weiterhin einzuberufen, wenn dies von mindestens 20% der Mitglieder verlangt wird." },
      { type: "paragraph", text: "Die Einberufung erfolgt durch schriftliche Einladung und/oder per E-Mail unter Angabe der Tagesordnung und mit einer Frist von mindestens zwei Wochen zwischen dem Tag des Zugangs der Einladung und dem Tag der Mitgliederversammlung." },
      { type: "paragraph", text: "Die Beschlüsse der Mitgliederversammlung werden protokolliert. Das Protokoll ist vom Protokollführer und einem Vorstandsmitglied zu unterzeichnen." },
    ],
  },
  {
    number: 8,
    heading: "§ 8",
    title: "Abstimmungen und Wahlen; Mehrheitsverhältnisse",
    blocks: [
      { type: "paragraph", text: "Jedes Mitglied hat in der Mitgliederversammlung eine Stimme pro angefangene zehn Hektar angeschlossener Waldfläche, höchstens jedoch 10 Stimmen. Gesamthandseigentümer und Miteigentümer können nur einheitlich abstimmen." },
      { type: "paragraph", text: "Die Mitgliederversammlung ist beschlussfähig, wenn mindestens ein Drittel der stimmberechtigten Mitglieder mit mindestens einem Drittel der angeschlossenen Waldflächen anwesend oder vertreten sind. Bei Beschlussunfähigkeit muss der Vorstand binnen vier Wochen eine neue Versammlung mit der gleichen Tagesordnung einberufen. Diese ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig. Darauf ist in der zweiten Einladung besonders hinzuweisen." },
      { type: "paragraph", text: "Die Mitgliederversammlung beschließt mit einfacher Mehrheit der abgegebenen Stimmen. Stimmengleichheit gilt als Ablehnung; Stimmenenthaltungen werden nicht berücksichtigt." },
      { type: "paragraph", text: "Beschlussfassungen über die Regelung der Andienungspflicht gemäß § 7 Abs. 1 Buchst. c), über den Erwerb, die Veräußerung und die Belastung von Grundstücken und die Aufnahme von Darlehen mit einer Nettodarlehenssumme von mehr als 5.000,00 Euro gemäß Buchst. e), über die Regelung über Art und Umfang der durchzuführenden forstlichen Maßnahmen gemäß Buchst. f) und über die Beschaffung und den Einsatz von Maschinen und Geräten mit einem Nettogeschäftswert (ohne gesetzliche Umsatzsteuer) von mehr als 5.000,00 Euro gemäß Buchst. n) bedürfen einer Mehrheit von zwei Dritteln der abgegebenen Stimmen." },
      { type: "paragraph", text: "Beschlüsse über die Satzungsänderung oder über die Auflösung des Vereins müssen mit einer Mehrheit von mindestens drei Vierteln der abgegebenen Stimmen gefasst werden." },
      { type: "paragraph", text: "Die Mitglieder können sich in der Versammlung durch ein anderes Mitglied oder ein Familienmitglied mit schriftlicher Vollmacht vertreten lassen. Der Vertreter darf jedoch unter Berücksichtigung der eigenen Stimmen nicht über mehr als 10 Stimmen verfügen." },
      { type: "paragraph", text: "Ein Mitglied ist nicht stimmberechtigt, wenn die Beschlussfassung der Vornahme eines Rechtsgeschäftes mit ihm, die Einleitung oder Erledigung eines Rechtsstreits zwischen ihm und dem Waldverein oder ein sonstiges Verfahren gegen ihn betrifft." },
      { type: "paragraph", text: "Abstimmungen und Wahlen werden mit Handzeichen oder mit Stimmzetteln durchgeführt. Sie müssen geheim durch Stimmzettel erfolgen, wenn der Vorstand oder mindestens 25 Prozent der bei der Beschlussfassung hierüber gültig abgegebenen Stimmen es verlangt." },
      { type: "paragraph", text: "Wird eine Wahl mit Stimmzetteln durchgeführt, so hat jeder Wahlberechtigte so viele Stimmen, wie Mandate zu vergeben sind. Der Wahlberechtigte bezeichnet auf dem Stimmzettel die vorgeschlagenen Kandidaten, denen er seine Stimme geben will. Gewählt sind die Kandidaten, die die meisten Stimmen erhalten." },
      { type: "paragraph", text: "Wird eine Wahl mit Handzeichen durchgeführt, so ist für jedes zu vergebende Mandat ein besonderer Wahlgang erforderlich. Gewählt ist, wer mehr als die Hälfte der abgegebenen gültigen Stimmen erhalten hat. Erhält kein Kandidat im ersten Wahlgang die erforderliche Mehrheit, so wird eine Stichwahl zwischen jeweils den beiden Kandidaten durchgeführt, die die meisten Stimmen erhalten haben. In diesem Falle ist der Kandidat gewählt, der die meisten Stimmen erhält. Sind nicht mehr Kandidaten vorgeschlagen, als Mandate neu zu besetzen sind, so kann gemeinsam (en bloc) abgestimmt werden, sofern dem nicht widersprochen wird." },
      { type: "paragraph", text: "Der Gewählte hat unverzüglich dem Waldverein gegenüber zu erklären, ob er die Wahl annimmt." },
    ],
  },
  {
    number: 9,
    heading: "§ 9",
    title: "Vorstand, Geschäftsführung",
    blocks: [
      { type: "paragraph", text: "Der Vorstand besteht aus dem Vorsitzenden, seinem Stellvertreter und mindestens einem weiteren Vorstandsmitglied je angefangene 500 ha der angeschlossenen Flächen der Mitglieder." },
      { type: "paragraph", text: "Die Mitglieder des Vorstandes werden auf die Dauer von 3 Jahren gewählt. Wiederwahl ist zulässig; eine Ersatzwahl erfolgt für den Rest der Amtsperiode, wenn ein Vorstandsmitglied vorzeitig aus dem Amt ausscheidet." },
      { type: "paragraph", text: "Der Vorstand, dieser vertreten durch den Vorsitzenden oder dessen Stellvertreter, vertritt den Waldverein gerichtlich und außergerichtlich (vgl. § 26 BGB). Der Vorsitzende des Vorstands oder der stellvertretende Vorsitzende des Vorstands sind jeweils alleinvertretungsberechtigt. Der Vorstand gibt sich eine Geschäftsordnung, die der Genehmigung der Mitgliederversammlung bedarf." },
      { type: "paragraph", text: "Der Vorstand ist durch den Vorsitzenden mindestens vierteljährlich einzuberufen. Er ist weiterhin einzuberufen, wenn mindestens zwei Mitglieder des Vorstandes dies verlangen. Die Vorstandssitzung soll schriftlich, per Telefax oder per E-Mail unter Einhaltung einer Frist von einer Woche unter Bekanntgabe der Tagesordnung einberufen werden; in dringenden Fällen kann die Einberufung auch telefonisch erfolgen und die Frist auf drei Tage (zwischen dem Tag des Zugangs der Einladung und dem Sitzungstag) verkürzt werden." },
      { type: "paragraph", text: "Der Vorstand fasst seine Beschlüsse mit einfacher Stimmenmehrheit. Bei Stimmengleichheit entscheidet der Vorsitzende, bei seiner Abwesenheit der stellvertretende Vorsitzende des Vorstandes. Der Vorstand ist beschlussfähig, wenn mehr als die Hälfte seiner Mitglieder, darunter der Vorsitzende oder sein Stellvertreter, anwesend ist. Beschlüsse sind zu protokollieren." },
      { type: "list", intro: "Der Vorstand führt die Geschäfte und verwaltet das Vermögen des Waldvereins nach Maßgabe der Satzung und der Beschlüsse der Mitgliederversammlung. Hierzu gehört insbesondere:", items: ["die Führung des Mitglieder- und Flächenverzeichnisses", "die Aufstellung des jährlichen Wirtschafts- bzw. Haushaltsplanentwurfes sowie des Jahresabschlusses des Waldvereins, soweit diese Aufgabe nicht dem Geschäftsführer (Abs. 7) übertragen wird", "die Erarbeitung von Berichten und statistischen Auswertungen, soweit diese den Waldverein und nicht den Forstbetrieb der Mitglieder betreffen", "die Führung des Schriftverkehrs", "die Zusammenarbeit mit den Mitgliedern und die Vorbereitung der Mitgliederversammlungen", "die Vergabe von Aufträgen für Lieferungen und Leistungen und die Anweisung von Zahlungen", "der Abschluss bzw. die Auflösung von Arbeits- und Dienstverträgen", "die Einhaltung der datenschutzrechtlichen Bestimmungen"] },
      { type: "paragraph", text: "Die Geschäftsführung oder Teile davon können Dritten übertragen werden. Wenn und soweit der Vorstand einem Geschäftsführer im Namen und für Rechnung der Forstbetriebsgemeinschaft die Wahrnehmung der laufenden Geschäfte überträgt, ist er verpflichtet, diesen zu überwachen und sich regelmäßig über die Geschäftsführung unterrichten zu lassen. Die Einzelheiten sind in einem Geschäftsführervertrag (Dienstvertrag/Arbeitsvertrag) zu regeln; über wesentliche wirtschaftliche Eckpunkte des Vertrags ist die Mitgliederversammlung zu unterrichten." },
    ],
  },
  {
    number: 10,
    heading: "§ 10",
    title: "Ehrenamt, Ersatz von Auslagen; nebenberufliche Vorstandstätigkeit",
    blocks: [
      { type: "paragraph", text: "Die Tätigkeit im Vorstand ist grundsätzlich ein Ehrenamt." },
      { type: "paragraph", text: "Auslagen, die durch die Vorstandstätigkeit entstehen, werden auf Nachweis erstattet." },
      { type: "paragraph", text: "Für die nebenberufliche Vorstandstätigkeit, insbesondere des Vorsitzenden und des stellvertretenden Vorsitzenden des Vorstandes, kann die Mitgliederversammlung auf Antrag des Vorstandes eine angemessene jährliche Tätigkeitspauschale beschließen." },
    ],
  },
  {
    number: 11,
    heading: "§ 11",
    title: "Finanzierung der Aufgaben",
    blocks: [
      { type: "paragraph", text: "Der Waldverein kann zur Finanzierung seiner Aufgaben Mitgliedsbeiträge, Umlagen und sonstige Entgelte für einzelne Dienstleistungen erheben (§ 18 Abs. 1 Nr. 3 Buchst. b) BWaldG). Darüber hinaus kann der Waldverein seine Aufgaben auch durch staatliche Beihilfen finanzieren." },
      { type: "paragraph", text: "Für Mitgliedsbeiträge gilt folgender Schlüssel: 0,50 € pro Hektar und Jahr. Über die Höhe des Beitragssatzes beschließt die Mitgliederversammlung." },
      { type: "paragraph", text: "Das Mitglied scheidet durch Kündigung oder Tod nach Maßgabe des § 3 Abs. 4 der Satzung ohne Auseinandersetzung aus dem Waldverein aus; dementsprechend besteht kein Anspruch auf ein Auseinandersetzungsguthaben. Mit Ausschluss aus dem Waldverein entfällt jeglicher Anspruch auf anteiliges Vereinsvermögen. Die Mitgliederversammlung kann Ausnahmen beschließen." },
    ],
  },
  {
    number: 12,
    heading: "§ 12",
    title: "Rechnungslegung, Entlastung",
    blocks: [
      { type: "paragraph", text: "Der Rechnungsprüfer darf kein Mitglied der von ihm zu überprüfenden Vereinsorganen sein." },
      { type: "paragraph", text: "Der Vorstand hat über alle Einnahmen und Ausgaben eines Geschäftsjahres innerhalb von drei Monaten nach Ablauf des Kalenderjahres Rechnung zu legen und die Rechnungslegung den Rechnungsprüfern zuzuleiten." },
      { type: "paragraph", text: "Der Vorstand legt die Jahresrechnung mit dem Prüfungsbericht der Mitgliederversammlung zur Beschlussfassung vor." },
      { type: "paragraph", text: "Das Geschäftsjahr ist das Kalenderjahr." },
    ],
  },
  {
    number: 13,
    heading: "§ 13",
    title: "Auflösung des Waldvereins",
    blocks: [
      { type: "paragraph", text: "Im Falle der Auflösung des Waldvereins beschließt die Mitgliederversammlung gleichzeitig über die Verwendung des vorhandenen Vermögens." },
      { type: "paragraph", text: "Der amtierende Vorstand übernimmt die Auflösung (Liquidation) des Vereins gemäß § 48 BGB, soweit nicht besondere Liquidatoren durch die Mitgliederversammlung bestellt werden." },
      { type: "paragraph", text: "Ist hierüber kein Beschluss zustande gekommen, fällt das Vermögen des Waldvereins den Mitgliedern nach Abzug aller Verbindlichkeiten im Verhältnis der Größe ihrer angeschlossenen Grundstücke zu." },
      { type: "paragraph", text: "Für etwaige bei der Auflösung noch offenstehender Verbindlichkeiten gelten die Absätze 1 und 2 entsprechend." },
      { type: "paragraph", text: "Die vorstehende Satzung wurde in der Gründungsversammlung / Mitgliederversammlung in ........................ am .......................... beschlossen." },
    ],
  },
];
