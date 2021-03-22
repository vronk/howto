---
# start of metadata for the resource.
title: "XML, TEI, oXygen: Einführung & Praxis"
# if title has a colon in it, you have to "Put it: In Double Quotes". If it also includes a quote, "You Can:'nest them'"
date: 2021-08-27
# date that the resource was published on DARIAH-Campus
authors:
  - ulrike-czeitschner
  - daniel-schopper
# firstname-lastname is a slug pointing to the record in /contents/data/person.yaml
contributors:
  - firstname-lastname
# firstname-lastname is a slug pointing to the record in /contents/data/person.yaml. Contributors are optional.
editors:
  - elisabeth-königshofer
  - florian-wiencek
# firstname-lastname is a slug pointing to the record in /contents/data/person.yaml. Editors are optional.
categories:
  - dariah
# categories are what on the frontend we call sources, see: https://campus.dariah.eu/sources. A category listed here must exist in /contents/data/category.yaml. Do not create new categories unless you get a go-ahead from DARIAH-Campus editors.
tags:
  - xml
  - tei
# choose up to five keywords for the resource. All lower case, multiple words joined by hyphens (so-called "slugs"). A tag listed here must also exist in /contents/data/tag.yaml. If you think your resource needs a new tag, feel free to do so by listting it here and adding it (name, slug, description) in /contents/data/tag.yaml. The editors will try to keep the number of tags manageable. Tags are used to group resources around topics, see: https://campus.dariah.eu/tags
abstract: Short teaser about the contents of your resource.
# Abstracts are displayed in the previews of individual resources, like here: https://campus.dariah.eu/resources. Abstracts should be very short and briefly introduce what the resource is about. Abstracts are not displayed at the beginning of the actual content of the resource. If you want to use the same text as the teaser and as the first paragraph of your resource, you need to put that text as abstract in the metadata, and as a regular paragraph at the beginning of your resource.
type: training module
featuredImage: /assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/imagename.imagetype
# eg. /assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/image.png. This is the image that you would like to represent your resource. Its optional.
licence: CCBY 4.0
# please the licence field as the default licence, CCBY 4.0, unless you have discussed a different licence with a DARIAH-Campus editor
toc: true
# toc = table of contents. If true, then a table of contents will be generated. If false, non will appear.
targetGroup: Domain researchers
# one or more of the following: "Data managers", "Domain researchers", "Data service engineers", "Data scientists/analysts"
domain: Social Sciences and Humanities
# default is Social Sciences and Humanities. Discuss with DARIAH-Campus editor if there is any other target domain.
version: 1.0.0
# unless this is a new version, this will be 1.0.0
# end of metadata
---

Diese ACDH-CH Übungsmaterialien sollen Sie beim Annotieren eines Beispieltexts
begleiten und Ihnen einige Möglichkeiten aufzeigen, wofür die Guidelines der
Text Encoding Initiative genutzt werden können. Als Werkzeug kommt
[oXygen XML Editor 20.1](https://www.oxygenxml.com/) zum Einsatz. Kodiert werden
die Seiten 11 und 12 aus der in Wien erschienenen Zeitschrift Die Filmwelt. Nr.
31, Jahrgang 1924. Der gewählte Ausschnitt umfasst eine kurze Filmbesprechung
inklusive Spielplan, ein Gedicht, mehrere kurze Beiträge aus der Rubrik
'Film-Kritiken' sowie eine Bekanntmachung der Zeitschriftenredaktion. Diese
Zeitschrift ist online verfügbar unter [ÖNB-ANNO](http://anno.onb.ac.at/)
([Filmwelt 31, 1924, Seite 11](http://anno.onb.ac.at/cgi-content/annoshow-plus?call=fwt|1924|0131|00000011||jpg||45|),
[Filmwelt 31, 1924, Seite 12](http://anno.onb.ac.at/cgi-content/annoshow-plus?call=fwt|1924|0131|00000012||jpg||45|)).

Ein wichtiges Hilfsmittel für die Arbeit mit dem Vokabular der TEI Guidelines
ist die ausführliche Dokumentation mit den zahlreichen darin enthaltenen
Beispielen. Öffnen Sie die [Guidelines](https://tei-c.org/guidelines/P5/)
während Ihrer Arbeit. Dort finden Sie Links zu Listen mit
[Elementen](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/REF-ELEMENTS.html)
und
[Attributen](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/REF-ATTS.html),
oder Sie können direkt nach einzelnen Komponenten suchen.

Das Ziel der Übung sollte es sein, dass Sie in jeder Praxis-Einheit zumindest
einige Belegstellen selbst annotieren. Für den Fall, dass Ihre Zeit nicht
ausreicht, den gesamten Text in all seinen Facetten vollständig zu kodieren,
erlauben eigens vorbereitete Dokumente, den Bearbeitungsfortschritt
nachzuvollziehen. Im Ordner `Uebungen` finden Sie 7 Dateien, die den
Beispieltext in jeweils unterschiedlichen Auszeichnungsstadien enthalten. Der
Rohtext des Dokuments Nr. 1 ist in Dokument Nr. 2 mit Elementen versehen, die
die Textstruktur z.B. Textabschnitte, Absätze und Auflistungen betreffen. Diese
Elemente sind in Dokument Nr. 3 mit Hilfe von Attributen und Werten bzw.
weiteren Elementen detaillierter annotiert. Die Dokumente Nr. 4-6 widmen sich
der semantischen Annotation wie Personen- und Ortsnamen, Datumsangaben und
Verweisen. In Dokument Nr. 7 sind Vorschläge für eine quellennahe Wiedergabe
z.B. von Zeilen- und Seitenumbrüchen, Kopfzeilen, Abbildungen u.ä. sowie
Fehlerkorrekturen enthalten. Als Endergebnis dieser Übung dient diese Datei
`7_Repraesentation_FW_11_12.xml` zudem als Ausgangspunkt für die exemplarische
Auswertung mit Hilfe von XPath (siehe Praxis-Einheit 3.2.).

Die Einführungen beginnen jeweils mit einer Inhaltsübersicht in Form von
Schlagworten, gefolgt von knappen einleitenden Erläuterungen. Im Anschluss daran
verweisen Folien stichwortartig auf relevantes Hintergrundwissen. Die Folien
stammen aus einer von uns gesondert erstellten Powerpoint Präsentation. Das
gesamte Konvolut `ACDH-CH-XML_TEI_oXygen_Folien_de` im PDF-Format finden Sie im
Ordner `Anleitung`. In der Präsentation genannte Links zu Webseiten sind hier
unter den entsprechenden Folien als 'Verweis I, II' angegeben. Auch die
Praxis-Einheiten beginnen jeweils mit einer kurzen Inhaltsübersicht, gefolgt von
_Schritt-für-Schritt_-Anweisungen. An geeigneter Stelle sind neu hinzukommende
Auszeichnungskomponenten aufgelistet und zu jeder von ihnen konkrete
Annotationsbeispiele angeführt.[^1]

[^1]:
    Dieser Anleitungstext ist selbst TEI-konformes XML. Er wurde im
    oXygen-Editor erstellt und mit Hilfe integrierter TEI-Stylesheets nach XHTML
    umgewandelt. Einen durchaus brauchbaren Ausdruck erhält man direkt im
    Browser mit Hilfe der Tastenkombination 'Strg+P'.

## 1. Block

### 1.1. Einführung: XML / TEI Basics

- Elemente, Syntax, Dokumentmodell, Hierarchie

- Wohlgeformtheit, Validität

- Schema, Namensraum

- Was ist die TEI?

Sofern es sich nicht um ein born digital-Dokument handelt, beginnt die
Erstellung einer digitalen Ressource mit dem Einscannen einer Vorlage, daran
anschließend erfolgt die Texterkennung optical character recognition. Das
Ergebnis ist ein elektronischer Text, den man zwar mit verschiedenen Programmen
strukturieren und formatieren kann, wobei die Möglichkeiten sowohl im Hinblick
auf das Layout als auch die inhaltliche Beschreibung meistens sehr begrenzt
sind. Außerdem ist die Konvertierung in andere Formate oft nicht verlustfrei
möglich. Um elektronische Daten systematisch, am besten mehrfach und
interdisziplinär nutzen zu können, benötigen sie dauerhafte strukturelle und
inhaltliche Annotationen. An diesem Punkt kommen sogenannte Auszeichnungs- oder
Markupsprachen zum Einsatz.

![HTML vs. XML](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie5.png)

Verweis [I](https://www.w3.org/html/), [II](https://www.w3.org/XML/)

![XML](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie6.png)

![www Consortium](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie7.png)

Verweis [I](https://www.w3.org/)

![XML auf einen Blick](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie8.png)

![XML Syntax](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie9.png)

![XML Dokument](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie10.png)

![XML Hierarchie](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie11.png)

![XML & TEI](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie12.png)

Verweis [I](https://tei-c.org/)

### 1.2. Praxis: oXygen

- oXygen starten

- Projekt anlegen

- Verzeichnisse hinzufügen

- leeres XML-Dokument erstellen

- Tags einfügen, auto-complete etc.

- Was passiert, wenn man einen Closing Tag löscht?

- TEI namespace

oXygen: Informationen zum Editor finden sie auf der Webseite
[https://www.oxygenxml.com/](https://www.oxygenxml.com/). Die ausführlichen
[Handbücher](https://www.oxygenxml.com/documentation.html) enthalten neben
Screenshots auch Links zu Videoeinführungen. Hinweise zu gängigen
Tastaturkürzeln für Windows/Linux sowie Mac/OS X finden Sie
[hier](https://www.oxygenxml.com/doc/versions/20.1/ug-editor/topics/common-shortcut-keys.html).

Zunächst gilt es, ein neues oXygen-Projekt anzulegen. Öffnen Sie dafür den
Editor durch Doppelklick. Falls nicht bereits sichtbar, öffnen Sie im Editor das
Projekt-Fenster, indem Sie in der Menüleiste auf 'Fenster' > 'Ansicht zeigen'
klicken und 'Projekt' auswählen. Wählen Sie dann in der Menüleiste 'Projekt' >
'Neues Projekt' aus. Es erscheint ein Dialogfenster mit dem Vorschlag, das neue
Projekt 'newProject.xpr' zu nennen. Benennen Sie es in 'MeinTEIProjekt.xpr' um
und wählen Sie als Speicherort den Ordner `Uebungen`, er befindet sich im Ordner
`ACDH-CH_Tutorial_de`. Nach dem Speichern wird Ihr Projekt und der Ordner
'Uebungen' links im Projektfenster angezeigt. (Sollten Sie später einem Projekt
weitere Ordner oder Dateien hinzufügen wollen, markieren Sie das Projekt im
Projektfenster und wählen Sie mit der rechten Maustaste Verzeichnis hinzufügen
bzw. Datei hinzufügen aus.)

Öffnen Sie nun ein neues Dokument in oXygen, indem Sie auf 'Datei' > 'Neue
Datei' klicken und die Vorlage XML-Dokument' auswählen. Klicken Sie auf
erstellen.

oXygen öffnet ein neues XML-Dokument, das nur die XML-Deklaration enthält. Gehen
Sie in die zweite Zeile und tippen Sie `<element attribut="` ein. oXygen ergänzt
für Sie die schließenden Anführungszeichen und positioniert den Cursor an der
richtigen Stelle um den Attributwert einzufügen. Solange das Dokument nicht
'well-formed' ist, macht Sie der Editor mit einem roten Quadrat in der rechten
oberen Ecke sowie mit einer Fehlermeldung in der Fußzeile des Dokumentenfensters
darauf aufmerksam. Die Zeile, in der sich der Fehler befindet, wird außerdem am
rechten Rand des Fensters rot markiert.

Tippen Sie nun `wert` ein. Positionieren Sie den Cursor nach dem schließenden
Anführungszeichen und ergänzen Sie die schließende Spitzklammer `>`.
Praktischerweise vervollständigt oXygen das Element automatisch um den
schließenden Tag. Drücken sie 'Enter' - das Dokument sollte nun 'well-formed'
sein (erkennbar an der grünen Einblendung rechts) und so aussehen:

!['well formed' Dokument](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/2_XML_new.png)

Kopieren sie bitte folgenden kurzen Text 4 mal in das Element und fügen Sie eine
Leerzeile zwischen die Absätze ein.

> _Der Film „Die Wunder des Meeres“ führt uns in ein bisher nie gezeigtes
> Milieu: auf den Grund des Meeres. Der berühmte Ozeanforscher Sir J. E.
> Williamson hat als erster das nie vorher erhellte Dunkel der Meerestiefen
> mittels seiner eigens konstruierten Tiefseestation für kinematographische
> Aufnahmen dem menschlichen Auge enthüllt._

Markieren Sie den ersten Absatz und drücken Sie 'Strg+E'. Es erscheint ein
Dialogfenster, in dem Sie nach einem Tag gefragt werden, mit dem Sie die
Textauswahl umgeben möchten. Tippen Sie `Absatz` ein. Wiederholen Sie diesen
Schritt beim zweiten Paragraphen. Sie können auch mit der rechten Maustaste auf
den ausgewählten Text klicken und aus dem Kontextmenü 'Refaktorierung' > 'Mit
Tags umgeben' auswählen, um zum selben Dialogfenster zu gelangen.

![Absatz in oXygen](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/3_Absatz.png)

Vergessen Sie nicht, das Dokument regelmäßig zu speichern! Dass Änderungen noch
nicht gespeichert wurden, erkennen Sie daran, dass links oben im Reiter neben
dem Dateinamen ein Sternchen eingeblendet ist. Beim ersten Speichern fordert Sie
der Editor auf, die Datei zu benennen. Nennen Sie sie 'MeinXML.xml'.

Tags können auch durch Eintippen eingefügt werden. Setzen Sie den Cursor an den
Beginn des dritten Paragraphen und tippen Sie `<Absatz>`. oXygen ergänzt den
schließenden Tag, nur leider ist dies die falsche Stelle. Löschen Sie
`</Absatz>` und positionieren Sie den Cursor am Ende des letzten Paragraphen.
Tippen Sie `<` ein - der Editor bietet ein Auswahlmenü mit Vorschlägen an.
Wählen Sie `/Absatz>` und drücken Sie 'Enter'.

Setzen Sie anschließend den Cursor in die Leerzeile zwischen dem dritten und
vierten Absatz und drücken Sie 'Alt+Umschalt+D'. Das Element `<Absatz>` wird
geteilt, allerdings stehen nun beide Tags in derselben Zeile. Um die Absätze
einheitlich zu formatieren, drücken Sie 'Strg+Umschalt+P'. Was passiert dabei?

Bringen Sie wie oben beschrieben (durch 'Eintippen' und / oder 'Markieren und
Strg+E') mehrere Tags mit dem Namen `<Hervorhebung>` im Text an. Löschen Sie
öffnende _oder_ schließende Tags, um die Reaktionen des Editors zu beobachten.
Entpacken Sie einzelne Elemente, d.h. entfernen Sie öffnende _und_ schließende
Tags zugleich, indem sie den Cursor in einen Elementnamen setzen und
'Alt+Umschalt+X' drücken.

Als nächstes sollen die Absätze des Texts mit Attributen nummeriert werden.
Positionieren Sie dazu den Cursor hinter dem Elementnamen des ersten öffnenden
Absatz-Tags (d.h. _vor_ `>`), tippen Sie ein Leerzeichen sowie `Nummer="1"` ein.
Das so eingefügte Attribut hat den Attributnamen 'Nummer' und den Wert '1'.
Versuchen Sie es auch mit einfachen statt doppelten Anführungszeichen oder einer
Kombination von beidem. Nummerieren Sie alle Absätze des Dokuments.

Da in dieser Übung sowohl die Elementnamen als auch die Attribute und Werte frei
erfunden sind, kann der Editor die Annotation nicht weiter unterstützen. Wenn
man jedoch einem Schema wie jenem der TEI folgt, zeigt sich das Potential von
oXygen unmittelbar. Der Editor prüft dann nicht nur, ob ein Dokument
'wohlgeformt', sondern auch, ob es 'valide' ist, d.h. ob das Dokument den im
Schema festgelegten Regeln entspricht. Darüber hinaus blendet er sowohl bei den
Elementen als auch den Attributen ein Auswahlmenü mit den an der jeweiligen
Stelle erlaubten Optionen ein.

Um aus dem XML-Dokument ein rudimentäres TEI-Dokument zu machen, bietet oXygen
eine weitere praktische Funktionalität. Klicken Sie dazu im Menü 'Werkzeuge' auf
'XML-Refaktorierung'. Es öffnet sich ein Fenster, das so aussieht:

![Refaktorierung in oXygen](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/4_Refaktorierung.png)

Wählen Sie hier den Menüpunkt 'Element umbenennen' und klicken Sie auf 'Weiter'.
Im nächsten Dialog werden Sie unter Zielelemente nach dem Namen jenes Elements
gefragt, das Sie umbenennen möchten. Geben Sie hier `Absatz` ein. Im darunter
liegenden Eingabefeld 'Neuer lokaler Name' geben Sie den neuen Namen für dieses
Element ein: `p` (für Englisch 'paragraph'). Klicken Sie auf 'Weiter'. Im
nächsten Dialogfeld werden Sie unter 'Bereich' gefragt, in welchen Dokumenten
Sie die Umbenennung vornehmen möchten. Belassen Sie hier die Standardeinstellung
auf 'Aktuelle Datei' und klicken Sie auf 'Vorschau'. Falls es in Ihrem Dokument
ungespeicherte Änderungen gibt, werden Sie nun zum Speichern aufgefordert,
anschließend sehen Sie ein Fenster, das beide Versionen des Dokuments vor und
nach der Umbenennung zeigt.

![Unterschiede zwischen Dokumentent vor und nach der Umbenennung in oXygen](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/5_Difference.png)

Sobald Sie auf 'Beenden' klicken, werden alle Umbenennungen durchgeführt.

Benennen Sie nun auf dieselbe Weise die Elemente `<Hervorhebung>` in `<hi>` (für
Englisch 'highlighted') sowie `<element>` in `<TEI>` um. Löschen Sie außerdem
das Attribut `@attribut` auf dem obersten Element sowie das Attribut `@Nummer`
auf den Paragraphen.

Stellen Sie sicher, dass das Dokument noch immer wohlgeformt ist, indem Sie
'Strg+Umschalt+W' drücken.

Ihr Dokument sollte nun folgendermaßen aussehen:

![Dokument das relativ nahe an TEI herankommt.](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/6_Fast-TEI.png)

Ihre Datei kommt einem TEI-Dokument schon ziemlich nahe. Dennoch schlägt Ihnen
oXygen noch immer keine Element- oder Attributnamen vor, wenn Sie neue Tags
einzufügen versuchen. Dies liegt daran, dass sich das Dokument in keinem
Namensraum befindet. Die Elemente heißen zwar gleich wie reguläre TEI-Elemente,
für oXygen sind Sie jedoch nicht dem TEI-Schema zugeordnet und ihre Bedeutung
ist nicht festgelegt; `<hi>` könnte z.B. genausogut eine Anrede bezeichnen.

Um auch für XML-Prozessoren eindeutig zu machen, dass es sich bei diesem
Dokument um ein _TEI_-Dokument handelt, ergänzen Sie im öffnenden `<TEI>`-Tag
das Attribut `@xmlns` mit dem Wert `http://www.tei-c.org/ns/1.0`. [^2]

[^2]:
    Genau genommen handelt es sich nicht um ein Attribut, sondern um einen
    sogenannten Namensraumknoten ('namespace node'), der aber syntaktisch wie
    ein Attribut aussieht und daher auch als 'Pseudoattribut' bezeichnet wird.

Was geschieht? Die öffnenden `<p>`- und `<TEI>`-Tags werden nun rot unterwellt,
außerdem wird in der Fußzeile ein rotes Ausrufezeichen und eine Fehlermeldung
angezeigt.

![Fehlermeldung bei invalidem TEI](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/7_Fast-TEI_invalid.png)

oXygen interpretiert das wohlgeformte Dokument nun als TEI-Dokument und
vergleicht es mit den Regeln des TEI-Schemas - anders gesagt: er 'validiert' es
gegen das TEI-Schema und findet dabei noch einige Fehler. Die Meldung in der
Fußzeile besagt etwa, dass direkt nach dem öffnenden `<TEI>`-Tag ein
`<teiHeader>` fehlt.

Setzen Sie den Cursor vor das erste `<p>`-Element und tippen Sie `<` ein: oXygen
schlägt Ihnen nun vor, das Element `<teiHeader>` einzufügen. Wenn Sie 'Enter'
drücken, wird nicht nur einfach ein Element, sondern gleich das Skelett eines
TEI-Headers eingefügt, mit leeren Platzhaltern für die wichtigsten
obligatorischen Elemente.

Experimentieren Sie nun mit dem Editor: klicken Sie auf verschiedene rot
unterwellte Elementnamen, überprüfen Sie, wie sich die Fehlermeldung verändert
bzw. welche Änderungsvorschläge oXygen Ihnen anbietet. Sie könnten bereits ein
valides TEI-Dokument erstellen, indem sie einfach den Vorschlägen von oXygen
folgen.

### 1.3. Einführung: TEI Markup

- Arten von Markup

- Makrostruktur, Strukturelemente, TEI-Header

- TEI Kapitel & Module

Der Begriff 'Markup' stammt ursprünglich aus der Druckersprache und bedeutet
Textauszeichung. Ein Beispiel dafür wären 'Fahnenkorrekturen'. Sie enthalten
z.B. Fehlerberichtigungen und Anweisungen, was mit den angestrichenen Stellen zu
tun ist - Buchstabenverdreher umstellen, Doppelungen löschen, Absätze aufteilen
usw. Dabei werden Prozeduren vorgegeben, die früher der Setzer, heute der
Grafiker mit dem Text zu vollziehen hat. Das könnte man als Prozedurales Markup
bezeichnen.

In vielen Fällen ist das Ziel von solchen 'Prozeduren' die Darstellung eines
Dokuments in einer digitalen Druckvorlage. Wenn die Auszeichnung darauf abzielt,
solche Darstellungsregeln zu definieren, spricht man von 'Präsentationalem
Markup'. Je nachdem mit welchem Verständnis man an die Sache herangeht, sind die
Grenzen natürlich fließend – letztendlich muss eine Software das Markup
interpretieren und in eine Seitenbeschreibungssprache wie z.B. PDF übersetzen,
die das Aussehen der Seite in absoluten Koordinaten beschreibt.
Textsatzprogramme wie LaTeX bieten Möglichkeiten, selbst Makros und Funktionen
zu programmieren, sind also stark prozedural aufgebaut – gleichzeitig versucht
gerade LaTeX das Dokument selbst von der Ausgabeformatierung zu treffen und
möglichst deskriptiv zu sein. Prinzipiell gibt XML nur die Regeln der Syntax an,
in der Dokumente kodiert werden – nicht aber die Bedeutung der Auszeichnung; bei
der TEI geht es dezidiert darum, Texte kodierend zu beschreiben, daher ist sie
klar vorwiegend deskriptiv.

Welche Aspekte von Texten lassen sich mit der TEI kodieren?

- Wie ist der Text formal und logisch aufgebaut? Aus welchen Einheiten und
  Untereinheiten, Abschnitten, Gliederungsebenen etc. besteht er. Gibt es
  Überschriften, Zitate, Fußnoten, Anmerkungen usw. usf.

- Über welche 'Dinge' spricht er? Das können reale und fiktionale Entitäten sein
  (Personen, Orte, etc.), aber auch Konzepte, Ideen, andere Texte usw. usf.

- _Wie_ spricht er? Mit welchen linguistischen, rhetorischen oder
  narratologischen Mitteln arbeitet er – Aspekte, die nicht an der
  Textoberfläche manifest sind, sondern erst durch einen Analyseschritt
  erfassbar werden.

- Wie sieht der Text aus?

Das sind grobe Einteilungen und keine strengen, analytisch scharf abgegrenzten
Kategorien. Bei der Beispielauswahl für die Folien und der Einteilung der
Übungsblöcke haben wir uns an diesen Kategorien orientiert. Zu beachten ist,
dass es häufig mehrere Möglichkeiten gibt, einzelne Aspekte zu kodieren. Wie ein
Dokument im Verhältnis zur Vorlage strukturiert werden soll, gibt nicht die TEI
vor, sondern ist Ihre Entscheidung.

In einer Briefedition können beispielsweise Regest und editorische Notiz im
Vorspann (`<front>`), der edierte Brief im Textkörper (`<body>`) und der
Stellenkommentar im Nachspann (`<back>`) kodiert sein. Damit bildet die
Grobstruktur des TEI-Dokuments die Struktur der modernen Edition ab, aber nicht
die Grobstruktur der Quelle. Genauso gut ist es möglich, dass ein vollständig
kodiertes historisches Buch aus dem 18. Jahrhundert eine sehr reiche Titelei mit
mehreren Titelseiten, Widmungen und Vorworten und ein mehrteiliges Register im
Anhang aufweist, und dass diese Struktur auch im `<front>` bzw. `<back>`
abgebildet ist. Der moderne Kommentar könnte dann z.B. überhaupt in ein
eigenständiges TEI-Dokument ausgelagert werden, damit der Primärtext und der
editorische Text klar voneinander getrennt sind.

Das bedeutet auch: Was Sie als ein _TEI-Dokument_ modellieren, ist Ihnen
überlassen:

- ... Ein Brief, ein Buch, ein Aufsatz

- ... Ein Band mit allen Ausgaben einer Zeitschrift aus einem Jahr

- ... Korpus von mehreren Texten

![Beispieldokument](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie16.png)

Verweis [I](https://commons.wikimedia.org/wiki/File:BALZAC_Corrections2.jpg)

![Arten von Markup](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie17.png)

![Arten von deskriptivem Text-Markup](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie18.png)

![Makrostruktur 1](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie19.png)

![Makrostruktur 2](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie20.png)

![Makrostruktur 3](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie21.png)

![Makrostruktur 4](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie22.png)

![Strukturelemente 1](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie23.png)

![Strukturelemente 2](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie24.png)

![Strukturelemente 3](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie25.png)

![Strukturelemente 4](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie26.png)

![TEI Header 1](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie27.png)

![TEI Header 2: Identifikation](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie28.png)

![TEI Header 3: Quellenangabe](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie29.png)

![TEI Header 4: Veröffentlichung](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie30.png)

![TEI Header 5: Textkodierung](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie31.png)

![TEI Header 6: Inhalt & Kontext](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie32.png)

![TEI Header 7: Provenienz](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie33.png)

![Globale Attribute](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie34.png)

![TEI Kapitel & Module](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie35.png)

Verweis [I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html)

![Kapitel 6: Verstexte](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie36.png)

![Kapitel 8: Sprachkorpora 1](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie37.png)

![Kapitel 8: Sprachkorpora 2](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie38.png)

![Kapitel 7: Dramentexte 1](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie39.png)

![Kapitel 7: Dramentexte 2](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie40.png)

Verweis
[I](https://books.google.at/books?id=b1tIAAAAcAAJ&lpg=PA1&hl=de&pg=RA1-PA10#v=onepage&q&f=false)

![Kapitel 7: Dramentexte 3](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie41.png)

![Kapitel 9: Wörterbücher 1](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie42.png)

![Kapitel 9: Wörterbücher 2](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie43.png)

![Kapitel 9: Wörterbücher 3](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie44.png)

![Kapitel 9: Wörterbücher 4](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie45.png)

![Weiterführende Informationen](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie46.png)

Verweis [I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/SG.html),
[II](https://teibyexample.org/)

### 1.4. Praxis: Strukturelles Markup

- TEI-Dokument erstellen

- Beispieltext einfügen

- Dokumentstruktur: teiHeader, text, body

- Annotation der Textstruktur: Abschnitte, Überschriften, Paragraphen,
  Verszeilen etc.

Vorlage: `1_Rohtext_FW_11_12.txt` diese txt-Datei enthält den Ausgangstext ohne
Markup. [^3]

[^3]:
    Nicht enthalten sind hier Kopfzeilen, Illustrationen, Seitenzahlen, Seiten-
    und Zeilenumbrüche, Worttrennungen wurden zusammengeführt.

Öffnen Sie diese Datei mit Doppelklick aus der Projekt-Ansicht und kopieren Sie
den Text in die Zwischenablage.

Öffnen Sie anschließend ein neues TEI-Dokument, indem Sie im Menü auf 'Datei' >
'Neue Datei' klicken und die Vorlage 'All [TEI P5]' auswählen.

Markieren Sie den Beispieltext im `<p>`-Element, löschen Sie ihn und fügen Sie
den kopierten Text aus der Zwischenablage ein.

Kontrollieren Sie, ob das Dokument nach wie vor wohlgeformt ('Strg+Umschalt+W')
und valide ('Strg+Umschalt+V) ist und speichern Sie es, beispielsweise unter dem
Namen 'MeinTEI.xml'.

![TEI Dokument](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/8_TEI_Doc.png)

#### 1.4.1. TEI-Header

Zunächst ist der TEI-Header um einige wichtige Angaben zu vervollständigen. Er
besteht aus der 'file description', die alle Informationen zum elektronischen
Dokument enthält (Name des elektronischen Dokuments, Autor etc.). Nachdem Sie in
unserem Beispiel den Text nicht selbst verfassen, sondern einen Ausschnitt aus
einer historischen Zeitschrift kodieren, ist darin auch eine Quellenangabe
'source description' enthalten.

Geben Sie einen vollständigen Titel für das TEI-Dokument an: ersetzen Sie das
`<title>`-Element der Vorlage durch:

```xml
<title type="main">Die Filmwelt - ein Ausschnitt</title>
<title type="sub">Digitale Version</title>
```

Ergänzen Sie im Element 'title statement' das 'statement of responsibility' mit
den Elementen 'responsibility' und 'personal name' und geben Sie sich als
Urheber der TEI-Kodierung an:

```xml
<respStmt>
  <resp>TEI Kodierung</resp>
  <persName>Vorname Nachname</persName>
</respStmt>
```

Ersetzen Sie den Inhalt von 'source description' durch eine detaillierte
bibliographische Angabe mit Hilfe der Elemente 'structured bibliographic
citation' `<biblStruct>` und 'monographic level' `<monogr>`.

Bibliographische Informationen: Die Filmwelt Illustrierte Kino Revue Herausgeber
Felix Brasch Zeitungsverlag Universale Ges. m. b. H. Wien, VII., Hermanngasse 5
Druckerei L. Beck & Sohn Nr. 31, 1924 Seite 11-12

Verwendete Elemente / Attribute / Werte:

- Geben Sie Haupt- und Untertitel der Zeitschrift an `<title>` + @type main /
  sub

- Benennen Sie den Herausgeber der Zeitschrift `<editor>`

- Ergänzen Sie im Impressum den Verlag inkl. seiner Adresse `<imprint>`,
  `<publisher>`, `<orgName>`, `<address>` und `<addrLine>`

- Weisen Sie die Fa. 'L. Beck & Sohn' als Druckerei aus `<resp>`, `<orgName>`

- Geben Sie Wien als Publikationsort und das Erscheinungsjahr an `<pubPlace>`,
  `<date>`

- Kodieren Sie, dass der gewählte Textausschnitt aus der Nr. 31, 1924, Seite
  11-12 stammt 'scope of bibliographic reference' `<biblScope>` + @type volume /
  page

Der vollständig annotierte TEI-Header sollte in etwa so aussehen:

```xml
<teiHeader>
  <fileDesc>
    <titleStmt>
      <title type="main">Die Filmwelt - ein Ausschnitt</title>
      <title type="sub">Digitale Version</title>
      <respStmt>
        <resp>TEI Kodierung</resp>
        <persName>Vorname Nachname</persName>
      </respStmt>
    </titleStmt>
    <publicationStmt>
      <p>Hier könnte man genauere Angaben zum Herausgeber/Verlag/Institut,
      zu Erscheinungsort und -datum des digitalen Texts ergänzen.</p>
    </publicationStmt>
    <sourceDesc>
      <biblStruct>
        <monogr>
          <title type="main">Die Filmwelt</title>
          <title type="sub">Illustrierte Kino Revue</title>
          <editor>Felix Brasch</editor>
          <imprint>
            <publisher>
              <orgName>Zeitungsverlag Universale Ges. m. b. H.</orgName>
              <address>
                <addrLine>Wien, VII., Hermanngasse 5</addrLine>
              </address>
            </publisher>
            <respStmt>
              <resp>Druckerei</resp>
              <orgName>L. Beck & Sohn</orgName>
            </respStmt>
            <pubPlace>Wien</pubPlace>
            <date>1924</date>
          </imprint>
          <biblScope unit="volume">31, 1924</biblScope>
          <biblScope unit="page">11-12</biblScope>
        </monogr>
      </biblStruct>
    </sourceDesc>
  </fileDesc>
</teiHeader>
```

Dieser TEI-Header umfasst nur einige wesentliche Elemente, er kann im
Bedarfsfall weitaus detaillierter ausfallen. In Vorlage
`7_Repraesentation_FW_11_12.xml` sind beispielhaft auch einige Angaben zur
Annotation 'encoding description' enthalten:

```xml
<encodingDesc>
  <editorialDecl>
    <p>Die Annotation folgt den Richtlinien der TEI/P5.</p>
    <hyphenation>
      <p>Zeilenenden sind mit dem Element 'lb' markiert. Trennungsstriche
        wurden entfernt und sind durch das Attribut @break mit dem Wert
        'no' repräsentiert.</p>
    </hyphenation>
    <normalization>
      <p>Typographie und Orthographie wurden weitestgehend beibehalten.</p>
    </normalization>
    <correction>
      <p>Vorgenommene Korrekturen wurden als solche annotiert.</p>
    </correction>
    <interpretation>
      <p>Personennamen historischer, religiöser, fiktionaler Figuren,
        Ortsnamen, Organisationsbezeichnungen, Datumsangaben</p>
    </interpretation>
  </editorialDecl>
</encodingDesc>
```

### 1.4.2. Fließtext

Um die Struktur des Fließtexts zu erfassen, werden zunächst die einzelnen
Abschnitte als `<div>`-Elemente mit Überschriften (`<head>`) und Absätzen
(`<p>`) bzw. Strophen (`<lg>` mit `<l>`) ausgezeichnet.

Im Text finden sich fünf Abschnitte:

- der Artikel _Die Wunder des Meeres_,

- der Spielplan des Films,

- ein Gedicht mit der Überschrift _Der Filmstar_,

- ein Abschnitt mit der Überschrift _FILM-KRITIKEN_ (dieser enthält wiederum für
  jede Filmkritik ein `<div>`-Element),

- die Annonce _Zur Schönheitskonkurrenz!_

Bevor Sie beginnen, entpacken Sie bitte das `<p>`-Element, in das Sie vorhin den
gesamten Text kopiert haben und der nur als Platzhalter gedient hat. Orientieren
Sie sich an der gescannten Vorlage und setzten Sie Abschnitte, Überschriften,
Paragraphen, Strophen und Verszeilen. Beachten Sie, dass das Dokument erst
well-formed ist, wenn Sie damit fertig sind, d.h wenn es keinen Text mehr gibt,
der nicht von Elementen (an der jeweils erlaubten Position) umgeben ist.
Beachten Sie dabei, dass der Text in einem `<div>`-Element von einem `<head>`-,
`<p>`- bzw. `<lg>`-Element umgeben sein muss.

Kodieren Sie dann Spielorte des Films als Aufzählungen (`<list>`) mit mehreren
Einträgen (`<item>`) sowie die Autorangaben unter dem Gedicht und unter den
Filmkritiken mit `<byline>`. [^4]

[^4]:
    Die vollständige Annotation dieses Schrittes finden Sie in Datei
    `2_Struktur_I_FW_11_12.xml`

Beispiel für `<div>`, `<head>` und `<p>`:

```xml
<div>
  <head>Die Wunder des Meeres.</head>
  <p>Der Film „Die Wunder des Meeres“ führt uns in ein bisher nie gezeigtes
    Milieu: auf den Grund des Meeres. Der berühmte Ozeanforscher Sir J. E.
    Williamson hat ...</p>
</div>
```

Beispiel für `<list>` und `<item>`:

```xml
<list>
  <item>Imperial-Kino, I., Rothgasse 9;</item>
  <item>Schwarzenberg-Kino, III., Schwarzenbergplatz;</item>
  <item>Flotten-Kino, VI., Mariahilferstraße 85;</item>
  <item>Wienzeile-Kino, VI., Linke Wienzeile 4;</item>
</list>
```

In einem nächsten Schritt werden die eingefügten Elemente mit Hilfe von
Attributen und unterschiedlichen Werten weiter spezifiziert. So lassen sich die
einzelnen 'divisions' als Artikel, Spielplan, Gedicht etc. identifizieren. Zudem
lässt sich angeben, dass 'Film-Kritiken' die Überschrift einer
Zeitschriftenkolumne ist, deren Unterabschnitte man benennen und darüber hinaus
z.B. nummerieren kann.

Verwendete Elemente / Attribute / Werte:

- div + type article / movieSchedule / poem / editorialStatement / reviews /
  review

- div type review + n 1 / 2

- head + type columnTitle [^5]

[^5]:
    Die vollständige Annotation dieses Schrittes finden Sie in Datei
    `3_Struktur_II_FW_11_12.xml`

Beispiele unterschiedlicher 'divisions':

```xml
<div type="article">
  <head>Die Wunder des Meeres.</head>
  <p>Der Film „Die Wunder des Meeres“ führt ...</p>
</div>

<div type="movieSchedule">
  <p>Der Film »Die Wunder des Meeres« läuft ab ...</p>
</div>

<div type="poem">
  <lg>
    <head>Der Filmstar.</head>
    <l>Du ahnst bei ihm die Schwüle</l>
    <l>...</l>
    <l>Um jede Großaufnahme.</l>
    <byline>Friedrich Zelnik.</byline>
  </lg>
</div>
```

Beispiel der Kolumne Film-Kritiken, des als solchen markierten Kolumnentitels
sowie der nummerierten Unterabschnitte:

```xml
<div type="reviews">
  <head type="columnTitle">FILM-KRITIKEN</head>
  <div type="review" n="1">
    <p>„Die Schlacht.“ Nach dem Roman ...</p>
  </div>
  ...
</div>
```

## 2. Block

### 2.1. Praxis: Semantisches Markup

- Werktitel, Personennamen, Ortsnamen, Daten etc.

- Verweise

- Register

#### 2.1.1. Semantik: basic

Die aktuelle Übung wendet sich dem Inhalt des Texts zu. Identifiziert werden
verschiedene Werktitel, Firmennamen, Adressen und Verweise. Darüber hinaus kommt
das Attribut `@ana` ('Analyseverweis') zum Einsatz, um das Gedicht mit einem
analytischen Kommentar zu verknüpfen. Um z.B. anzugeben, dass sich das Gedicht
von Prosatexten unterscheidet, ist nach dem `<body>` ein Nachspann (`<back>`) zu
ergänzen, der die Definition festhält.

Verwendete Elemente / Attribute / Werte:

- Werktitel `<title>`

- Personennamen `<persName>`

- Datumsangaben `<date>`

- Namen von Organisationen `<orgName>`

- Adressen bestehend aus `<address>` und einer Adressenzeile `<addrLine>` ODER

- Adressen mit detaillierter Auszeichnung address mit den Komponenten
  `<district>` und `<street>`

- Ortsangaben `<placeName>`

- Verweis auf 'etwas' oder 'jemanden' mit 'referencing string' `<rs>`

- Verweis auf eine andere 'Quelle' mit 'reference' `<ref>`

- `<div>` @type poem + @ana #verse

- Nachspann 'back matter' `<back>` und Analyseverweis 'interpretation'
  `<interp>` + @xml:id verse

[^6]

[^6]:
    Die vollständige Annotation dieses Schrittes finden Sie in Datei
    `4_Semantik_I_FW_11_12.xml`

Beispiele für `<title>`:

```xml
<title>„Die Wunder des Meeres“</title>
<title>„Die Schlacht.“</title>
<title>„Filmwelt“</title>
```

Beispiele für `<persName>`:

```xml
<persName>Sir J. E. Williamson</persName>
<persName>Marquis Yorisaka</persName>
<persName>Sch.</persName>
```

Beispiel für `<date>`:

```xml
<date>14. bis 17. November</date>
```

Beispiele für `<orgName>`:

```xml
<orgName>Imperial-Kino</orgName>
<orgName>„Mondial“</orgName>
```

Beispiel für `<address>` mit `<addrLine>`:

```xml
<address>
  <addrLine>I., Rothgasse 9</addrLine>
</address>
```

Beispiel für `<address>` mit `<district>` und `<street>`:

```xml
<address>
  <district>VI.,</district>
  <street>Mariahilferstraße 85</street>
</address>
```

Beispiele für `<placeName>`:

```xml
<placeName>Paris</placeName>
<placeName>Japan</placeName>
```

Beispiel für den Verweis auf 'etwas' oder 'jemanden' mit `<rs>`:

```xml
<rs>∆</rs>
```

`<rs>` kann z.B. auch dafür verwendet werden, Anaphern zu kodieren: 'Marquis
Yorisaka weilt in geheimer diplomatischer Mission in Paris; als **er** nach
Japan zurückkehrt ...'

Beispiel für den Verweis auf eine andere 'Quelle' mit `<ref>`:

```xml
<ref>Nummer 33</ref>
<ref>34</ref>
```

Beispiel eines Gedichts, das explizit als Verstext ausgewiesen ist:

```xml
<div type="poem" ana="#verse">
  <lg>
    <head>Der Filmstar.</head>
    <l>Du ahnst bei ihm die Schwüle</l>
    <l>Leise glimmender Gefühle.</l>
    <l>...</l>
    <l>Drum kämpft er mit Beharrlichkeit</l>
    <l>Um jede Großaufnahme.</l>
    <byline>Friedrich Zelnik.</byline>
  </lg>
</div>
```

Die Raute ist ein Verweis auf ein anderswo im Dokument definiertes Element.
(Vgl. dazu Abschitt 2.1.3., in dem die Referenzierung von Belegstellen im
Fließtext auf Listen thematisiert wird.) Fügen Sie nach dem schließenden
`<body>`-Tag einen Nachspann back mit einem `<interp>`-Element und das Attribut
@xml:id mit dem Wert verse ein. Der Inhalt dieses Elements beschreibt, worum es
sich handelt:

```xml
<back>
  <interp xml:id="verse">Gedicht in Versform</interp>
</back>
```

#### 2.1.2. Semantik: intermediate

Auch in dieser Übung werden die eingefügten Elemente mit Hilfe von Attributen
und Werten genauer beschrieben. Unterschieden werden verschiedenartige Werktitel
(Filmtitel mit @type=movie, Zeitschriftentitel mit @type=journal) und es wird
angegeben, ob ein Personenname eine historische (persName type="historical"),
religiöse (@type=religious) oder fiktionale (@type=fictional) Figur bezeichnet.
Sofern es sich um letzteres handelt, ist zu ergänzen, dass der Figurenname aus
den Bereichen 'Film' (@subtype=filmCharacter) oder 'Literatur'
(@subtype=literaryCharacter) stammt. Zudem wird bei Personennamen zwischen
Titel, Vor- und Nachnamen differenziert. Organisationsbezeichnungen werden
unterteilt in Kinos (orgName type="cinema") und Filmfirmen (@type=filmCompany),
Ortsbezeichnungen in Städte (placeName type="city") und Länder (@type=country).

Da die Datumsangaben in unserem Beispieltext keine einzelnen Tage, sondern
Zeiträume beschreiben, sind geeignete Attribute zu ergänzen. Bei den Verweisen
ist anzugeben, worauf sie referenzieren.

- `<title>` + @type movie / journal

- `<persName>` + @type historical / fictional / religious

- `<persName>` @type fictional + @subtype filmCharacter / literaryCharacter

- `<persName>` + `<roleName>` + `<forename>` + `<surname>`

- `<orgName>` + @type cinema / filmCompany

- `<placeName>` + @type city / country

- `<date>` + @from + @to (Werte YYYY-MM-DD)

- `<rs>` + @type chiffre

- `<ref>` + @type issue

[^21]

[^21]:
    Die vollständige Annotation dieses Schrittes finden Sie in Datei
    `5_Semantik_II_FW_11_12.xml`

Beispiele für verschiedene Arten von Werktiteln:

```xml
<egXML xmlns="http://www.tei-c.org/ns/Examples">
  <title type="movie"> „Die Wunder des Meeres“</title>
</egXML>

<egXML xmlns="http://www.tei-c.org/ns/Examples">
  <title type="movie"> „Die Schlacht.“</title>
</egXML>

<egXML xmlns="http://www.tei-c.org/ns/Examples">
  <title type="journal"> „Filmwelt“</title>
</egXML>
```

Beispiele für verschiedene Arten von Personennamen mit ausgewiesenen
Komponenten:

```xml
<persName type="historical">
  <roleName>Sir</roleName>
  <forename>J.</forename>
  <forename>E.</forename>
  <surname>Williamson</surname>
</persName>

<persName type="historical">
  <surname>Sch.</surnamen>
</persName>

<persName type="fictional"
  subtype="filmCharacter">
  <roleName>Marquis</roleName>
  <surname>Yorisaka </surname>
</persName>

<persName type="religious">
  <roleName>Budda's</roleName>
</persName>
```

Beispiel für eine Zeitspanne:

```xml
<date from"1924-11-14" to="1924-11-17">14. bis 17. November</date>
```

Beispiele für verschiedene Arten von Organisationen:

```xml
<orgName type="cinema">Imperial-Kino</orgName>
<orgName type="filmCompany">„Mondial“</orgName>
```

Beispiele für verschiedene Arten von Ortsnamen:

```xml
<placeName type="city">Paris</placename>
<placeName type="country">Japan</placeName>
```

Beispiel für den Verweis auf eine 'Chiffre':

```xml
<rs type="chiffre">∆</rs>
```

Beispiele für den Verweis auf andere Ausgaben der Zeitschrift:

```xml
<ref type="issue">Nummer 33</ref>
<ref type="issue">34</ref>
```

#### 2.1.3. Semantik: advanced

Weitere Möglichkeiten für die Verfeinerung der semantischen Annotation unseres
Beispieltexts könnten darin bestehen, explizit zu kodieren, dass es sich bei
einem Vor- bzw. Nachnamen lediglich um Initialen handelt, oder welchem
Reimschema die Verszeilen folgen.

Verwendete Elemente / Attribute / Werte:

- `<forename>` + @full init

- `<surname>` + @full init

- `<l>` + @rhyme a / b etc.

[^22]

[^22]:
    Die vollständige Annotation dieses Schrittes finden Sie in Datei
    `6_Semantik_III_FW_11_12.xml`

Beispiele für Namensinitialen:

```xml
<forename full="init">E.</forename>
<surname full="init">Sch.</surname>
```

Beispiel Reimschema:

```xml
<l rhyme="a">Du ahnst bei ihm die Schwüle</l>
<l rhyme="a">Leise glimmender Gefühle.</l>
<l>Steife Hemdbrust —</l>
<l rhyme="b">Heben — senken —</l>
<l rhyme="b">Augen, die sich stumm verrenken.</l>
<l>— — — — — —</l>
<l rhyme="c">Er ist von seltner Bescheidenheit.</l>
<l rhyme="d">Doch ihn verpflichtet sein Name,</l>
<l rhyme="c">Drum kämpft er mit Beharrlichkeit</l>
<l rhyme="d">Um jede Großaufnahme.</l>
```

Der Granularität der Annotation sind kaum Grenzen gesetzt. Es lassen sich auch
weiterführende Informationen einbinden. Bisher wurden in unserem Beispieltext
die 'Namen' von Personen und Orten ausgezeichnet. Eigenschaften, die darüber
hinausgehen und die eigentlichen Personen und Orte betreffen, fehlen bisher. Man
könnte jedoch explizit angeben, ob es sich bei einer Person um eine Frau oder
einen Mann handelt, welche Rolle sie einnimmt (Schauspieler oder Filmproduzent),
wie der Geburtsname lautet, falls im Text ein Künstlername verwendet wurde, oder
wann und wo sie geboren wurde oder gestorben ist. Bei den im Text genannten
Orten ließen sich Städte den Ländern und diese den Kontinenten zuordnen, oder
man könnte zur exakten Ortsbestimmung die Geokoordinaten ausweisen.

Da es sich hierbei um Zusatzinformationen handelt, die nicht Teil des kodierten
Texts selbst sind und die dort auch nicht untergebracht werden können, werden im
Anschluss an den `<body>` im Nachspann `<back>` entsprechende Listen eingefügt.
Sie enthalten alle Personen und Orte sowie die gewünschten Informationen, wobei
jeder Listeneintrag mit einer eindeutigen ID-Nummer versehen ist. Die einzelnen
Belegstellen im Text erhalten Attribute, die auf diese ID-Nummern verweisen.
Dadurch erhöht sich die semantische Aussagekraft beträchtlich: man kann
Textstellen gezielt finden, z.B. alle Schauspielerinnen, oder alle Personen, die
einen Künstlernamen haben, oder man könnte nach Städten und Ländern auf einem
bestimmten Kontinent suchen.

Nachspann mit Listen:

- `<listPerson>` + @type historical / fictional

- `<person>` + @xml:id pe1 / pe2 etc.

- `<person>` + @sex F / M

- `<person>` + @role actor / author / filmDirector / filmProducer / writer

- `<persName>` + @type artistName / birthName + `<forename>` + `<surname>`

- `<birth>` + @when + `<placeName>` + `<settlement>` + @type city + `<country>`

- `<death>` + @when + `<placeName>` + `<settlement>` + @type city + `<country>`

- `<listPlace>`

- `<place>` + @xml:id + pl1 / pl2 etc.

- `<location>` + `<country>` + @key FR / JA / RU

- `<location>` + `<bloc>` + @type continent

- `<persName>` + @ref #pe1 / #pe2 etc.

- `<placeName>` + @ref #pl1 / #pl2 etc.

[^23]

[^23]:
    Die vollständige Annotation dieses Schrittes finden Sie in Datei
    `6_Semantik_III_FW_11_12.xml`

Beispiel Nachspann mit historischer Personenliste und Komponenten:

```xml
<back>
  <listPerson type="historical">
  <person xml:id="pel" sex="M"
    role="filmDirector">
    <persName>
    <forename>John</forename>
    <forename>Ernest</forename>
    <surname>Williamson</surname>
    </persName>
    <birth when="1881-12-08">8. Dezember 1881
    <placeName>
      <settlement type="city">Liverpool</settlement>
      <country>Großbritannien</country>
    </placeName>
    </birth>
    <death when="1966-07-15">15. Juli 1966
    <placeName>
      <settlement type="city">Norfolk</settlement>
      <country>USA</country>
    </placeName>
    </death>
  </person>
  <person xml:id="pe2" sex="M" role="author">
    <persName>
    <forename>Friedrich</forename>
    <surname>Zelnik</surname>
    <birth when="1885-05-17">17. Mai 1885
    <placeName>
      <settlement type="city">Czernowitz</settlement>
      <country>Österreich-Ungarn</country>
    </placeName>
    </birth>
    <death when="1950-11-29">29. November 1950
    <placeName>
      <settlement type="city">London</settlement>
      <country>Großbritannien</country>
    </placeName>
    </death>
  </person>
  <person xml:id="pe3" sex="M" role="writer">
    <persName type="artistName">
    <forename>Claude</forename>
    <surname>Farrère</surname>
    </persName>
    <persName type="birthName">
    <forename>Frédéric</forename>
    <forename>Charles</forename>
    <surname>Bargone</surname>
    </persName>
    <birth when="1876-04-27">27. April 1876
    <placeName>
      <settlement type="city">Lyon</settlement>
      <country>Frankreich</country>
    </placeName>
    </birth>
    <death when="1957-06-21">21. Juni 1957
    <placeName>
      <settlement type="city">Paris<settlement>
      <country>Frankreich</country>
    </placeName>
    </death>
  </person>
    ...
  <person xml:id="pe29" sex="M">
    <persName>
    <roleName>Buddha</roleName>
    <forename>Siddharta</forename>
    <surname>Gautama</surname>
    </persName>
    <birth when="-0563">563 v. Chr.
    <placeName>
      <settlement type="city">Lumbini</settlement>
      <country>heute Nepal</country>
    </placeName>
    </birth>
    <death when="-0483">483 v. Chr.
    <placeName>
      <settlement type="city">Kushinagar</settlement>
      <country>heute Indien</country>
    </placeName>
    </death>
  </person>
  </listPerson>
</back>
```

Beispiel Nachspann mit fiktionaler Personenliste und Komponenten:

```xml
<back>
  ...
  <listPerson type="fictional">
  <person xml:id="pe26" sex="M">
    <persName>
    <forename>Richard</forename>
    <surname>Wittington</surname>
    </persName>
  </person>
  <person xml:id="pe27" sex="M">
    <persName>
    <roleName>Marquis</roleName>
    <surname>Yorisaka</surname>
    </persName>
  </person>
  <person xml:id="pe28" sex="M">
    <persName>
    <surname>Fergan</surname>
    </persName>
  </person>
  </listPerson>
  ...
</back>
```

Hier wäre es vermutlich sinnvoll, weitere Informationen anzuführen wie z.B. aus
welchem Stück, Roman oder Film die jeweilige Figur stammt, wer das Werk
geschrieben, wer die Rolle verkörpert hat etc. Um die Beispieldateien
einigermaßen übersichtlich zu gestalten und den Rahmen dieser Übung nicht zu
sprengen, wurde darauf jedoch verzichtet.

Beispiel Nachspann mit Ortsliste und Komponenten:

```xml
<back>
  ...
  <listPlace>
  <place xml:id="p11">
    <placeName>
    <settlement>Paris</settlement>
    <idno type="geonames">2988506</idno>
    </placeName>
    <location>
    <country key="FR">Frankreich</country>
    <bloc type="continent">Europa</bloc>
    </location>
  </place>
  <place xml:id="p12">
    <placeName>
    <country>Japan</country>
    <idno type="geonames">1861060</idno>
    </placeName>
    <location>
    <country key="JA">Japan</country>
    <bloc type="continent">Asien</bloc>
    </location>
  </place>
  <place xml:id="p12">
    <placeName>
    <country>Russland</country>
    <idno type="geonames">2017370</idno>
    </placeName>
    <location>
    <country key="RU">Russland</country>
    <bloc type="continent">Europa</bloc>
    <bloc type="continent">Asien</bloc>
    </location>
  </place>
  </listPlace>
</back>
```

Beispiele Belegstellen im Text, die auf Listeneinträge referenzieren:

```xml
<persName type="historical" ref="#pe1"
  <roleName>Sir</roleName>
  <forename full="init">J.</forename>
  <forename full="init">E.</forename>
  <surname>Williamson</surname>
</persName>

<placeName type="city" ref="p11">Paris</placeName>
```

Wenn Sie im Fließtext den Verweis auf einen Listeneintrag ergänzen möchten,
gehen Sie wie folgt vor: positionieren Sie den Cursor nach dem Elementnamen bzw.
nach dem letzten vorhandenen Attribut, fügen Sie ein Leerzeichen ein und tippen
Sie `ref="` ein. Der Editor ergänzt das schließende Anführungszeichen und
positioniert den Cursor automatisch dazwischen. Zudem erscheint ein
Dropdown-Menü mit den vorhandenen ID-Nummern. Wenn Sie eine ID-Nummer markieren,
zeigt der Editor eine Vorschau an, was die exakte Zuordnung wesentlich
erleichert. Wenn Sie die richtige ID-Nummer gefunden haben, drücken sie Enter,
der Editor fügt eine Raute sowie die ID-Nummer ein `ref="#pe1"`.

### 2.2. Einführung: Texte und ihre Vorlagen

- Unicode & Nicht-Unicode

- Text vs. Dokument

- 'Genetic Editing'

- In Kritischer Apparat

Beim Anblick von Folie 53 stellt sich die Frage: wo ist hier der Text? Ist der
Drucktext gemeint, der Schreibprozess oder die umgesetzten Änderungen? Abhängig
von der Sichtweise auf den Text und auf die Fragestellungen, die man beantworten
möchte, ist grundsätzlich alles möglich. Die Übersetzung von Fragestellungen in
Markup kann man als Datenmodellierung bezeichnen. Man kann zwar einen Text nicht
in all seinen Facetten in den Computer übertragen, jedoch drückt das, was man
annotiert, ein Modell des Textes aus, das von den zugrundeliegenden Interessen
mitbestimmt wird.

Wenn in Abschnitt 1.3. davon die Rede war, dass man mit Markup das Aussehen
eines Textes kodieren kann, ist das nur halb richtig: der Text selbst –
zumindest aus Sicht der TEI - ist etwas Abstraktes. Vielmehr sind es die
_Vorlagen_ des kodierten Textes, die ein Aussehen haben, die physischen
Dokumente. Wie ein Text digital hergestellt wird und wie er in maschinenlesbarer
Form abgebildet ist, wird vom Editor bestimmt – und das ist, wie jeder weiß, der
z.B. mit der Transkription von Handschriften betraut war, ein
Übersetzungsprozess.

Sehr vereinfacht kann man behaupten:

- Ein Fleck auf einem Blatt Papier oder Pergament wird als Graph identifiziert.

- Der Graph wird einem Graphem einer natürlichen Sprache zugewiesen, also einem
  Lautwert.

- Im Zusammenspiel mit den anderen Graphemen im Kontext wird ein 'Wort'
  identifiziert.

- Die Bedeutung dieses Wortes wird durch Einbeziehung der anderen Wörter in
  seiner Umgebung, im Dokument und Weltwissen des Lesers generiert, und im
  Wechselspiel daraus wiederum wird das Dokument an sich 'verständlich'.

Diese Kette von interpretativen Vorgängen erlernen menschliche Leser durch Übung
– Maschinen hingegen fehlt diese Fähigkeit. Sie können durch statistische
Algorithmen inzwischen erstaunliche Erfolge bei der Texterkennung (auch von
Handschriften) erzielen, sogar Layout erkennen und daraus einfache
Textstrukturen ableiten. Möchte man jedoch das Wissen über einen Text
festhalten, muss das zu einem großen Teil manuell geschehen. Die Frage, welche
Aspekte von diesem Übersetzungs- und Interpretationsprozess explizit gemacht
werden und welche nicht, bezeichnet man als Datenmodellierung: Ist die Form von
Buchstaben signifikant? Ist es wichtig für eine bestimmte Forschungsfrage, dass
die Datumszeile im Brief rechtsbündig steht? Ist es für die Leserschaft wichtig,
dass der Text, den man kodiert, voller Pleonasmen ist? Oder ist es das Ziel,
unterschiedliche Versionen eines Textes miteinander vergleichbar zu machen?

![Balzac Corrections](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie53.png)

Verweis [I](https://commons.wikimedia.org/wiki/File:BALZAC_Corrections2.jpg)

![Relevante Kapitel](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie54.png)

Verweis [I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/CH.html)

![Unicode](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie55.png)

Verweis [I](https://www.unicode.org/standard/where/),
[II](https://www.unicode.org/charts/)

![Zeichen vs. Glyphen](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie56.png)

Verweis [I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/CH.html#D4-42)

![... und Nicht-Unicode](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie57.png)

![Text? Dokument?F Faksimile?](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie58.png)

![Faksimile-Block (1)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie59.png)

![Faksimile-Block (2): "Parallele transkription"](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie60.png)

![Faksimile-Block (3)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie61.png)

Verweis [I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html#PHFAX)

![Aussehen der Vorlage - Attribute (1)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie62.png)

![Aussehen der Vorlage - Attribute (2)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie63.png)

![Aussehen der Vorlage - Elemente](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie64.png)

![Unleserliches & Beschädigtes](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie65.png)

![Auktoriale Streichungen & Ersetzungen (1)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie66.png)

![I am that](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie67.png)

Verweis
[I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html#PH-meta)

![Auktoriale Streichungen & Ersetzungen (2)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie68.png)

![Auktoriale Streichungen & Ersetzungen (3)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie69.png)

Verweis
[I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-metamark.html)

![Textkritisches Markup (1)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie70.png)

![Textkritisches Markup (2)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie71.png)

![Textkritisches Markup (3): Umstellungen](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie72.png)

Verweis
[I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html#transpo)

![Text-Orientiertes Markup](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie73.png)

Verweis
[I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html#index-egXML-d53e97442)

![Dokument-orientiertes Markup](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie74.png)

Verweis
[I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html#index-egXML-d53e97442)

![Textgenetisches Dossier](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie75.png)

Verweis
[I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html#index-egXML-d53e97442)

![Kapitel 12: Textkritischer Apparat](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie76.png)

![Textzeugen](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie77.png)

Verweis
[I](https://books.google.at/books?id=FNAMAQAAIAAJ&pg=PR6&focus=viewport&hl=de&output=html)

![Apparat](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie78.png)

Verweis
[I](https://books.google.at/books?id=FNAMAQAAIAAJ&hl=de&pg=RA1-PR2#v=onepage&q&f=false)

![Verbindung von Text & Apparat (1)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie79.png)

![Verbindung von Text & Apparat (2)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie80.png)

![Verbindung von Text & Apparat (3)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie81.png)

![Verbindung von Text & Apparat (4)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie82.png)

![Verbindung von Text & Apparat (5)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie83.png)

### 2.3. Praxis: quellennahe Repräsentation

Dieser Abschnitt beschäftigt sich damit, den digitalen Text um Angaben zur
Darstellung der gedruckten Vorlage zu ergänzen. Dies wäre erforderlich, wollte
man eine dokumentennahe digitale Edition und nicht nur eine elektronische
Version des Beispieltexts erstellen. Da es bisher nur um den 'reinen' Text
gegangen ist, fehlen wie in Abschnitt 1.4. erwähnt, einige dazu notwendige
Textpassagen z.B. die Kopfzeilen (fw type="header") und die Seitenzahlen (fw
type="pageNum"). Nachdem Sie den fehlenden Text eingefügt haben, kann er
entsprechend kodiert werden.

Zu ergänzen sind weiters Elemente, die die Seiten- und Zeilenumbrüche (`<pb>`
bzw. `<lb>`) oder den Spaltensatz (`<cb>`) markieren. Worttrennungen erfahren
dabei eine besondere Behandlung, damit auch abgeteilte Wörter gefunden werden
können. Die Seitenumbrüche dienen nicht nur der weiteren Strukturierung, sondern
werden dafür genutzt, die jeweiligen Textseiten mit den entsprechenden
Faksimiles zu verknüpfen. Darüber hinaus beinhaltet dieser Arbeitsschritt auch
typographische Aspekte wie z.B. Paragraphen mit Einzug (@rend=indent),
Hervorhebungen mit Sperrdruck (hi rend="spaced") und Fettdruck (@rend=bold),
Linien und andere 'trennende' Ornamente (`<milestone>`-Elemente mit
unterschiedlichen Attributen) sowie Abbildungen (`<figure>`).

Schließlich werden Abkürzungen aufgelöst und Fehlschreibungen, die im Original
vorhanden sind, entsprechend getagged.

- 'page beginning' `<pb>` + @facs 'Link zum Faksimile' [empty element]

- 'line beginning' `<lb>` + @break no [empty element]

- 'forme work' `<fw>` + @type header / pageNum

- 'column beginning' `<cb>` + @n 1 / 2 [empty element]

- `<p>` + @rend indent

- Hervorhebung 'gesperrt' bei allen vorhandenen Elementen + @rend spaced ODER

- 'highlighted' `<hi>` + @rend spaced

- Hervorhebung 'fett' bei allen vorhandenen Elementen + @rend bold ODER

- 'highlighted' `<hi>` + @rend bold

- `<list>` + @rend inline

- Linie als Bestandteil der Kopfzeile `<fw>` + @type header + @rend lineBelow

- Trennende Ornamente `<milestone>` + @type separator + @unit subsection + @rend
  asterisks / hrShort / hrLong

- Abbildung bestehend aus `<figure>` + 'description of figure' `<figDesc>` +
  `<graphic>` + @url 'Abbildung.png' [graphic empty element]

- Abkürzung ohne Auflösung 'abbreviation' `<abbr>`

- Abkürzung aufgelöst 'Auswahl' `<choice>` + `<abbr>` + 'expansion' `<expan>`

- Schreibfehler im Original 'Auswahl' `<choice>` + 'Latin thus or so' `<sic>` +
  'correction' `<corr>` @cert high / low

- fehlende Buchstaben im Original `<supplied>` + @reason missing

[^24]

[^24]:
    Die vollständige Annotation dieses Schrittes finden Sie in Datei
    `7_Repraesentation_FW_11_12.xml`

Beispiel für Seitenumbruch inkl. Verweis auf das Faksimile:

```xml
<pb
  facs="http://anno.onb.ac.at/cgi-content/annoshow-plus?call=fwt|1924|0131|00000011||jpg||45|"
/>
```

Beispiele für Zeilenumbrüche mit und ohne Worttrennung:

```xml
<p>... dem Weltruhm voranging, bestätigt in seinem Spiel<lb />
die Berechtigung dieses. Er spielt, indem er schein<lb break="no" />
bar gar nicht spielt. Doch aus dem undurchdring<lb break="no" />
lichen, selbstbeherrschten Gesicht erahnen wir<lb />
...</p>
```

Beispiel für eine Kopfzeile inkl. Zierlinie:

```xml
<fw type="header" rend="lineBelow">Nr. 31 DIE FILMWELT Jahrgang <date
    when="1914"
  >1924</date>
</fw>
```

Beispiel für eine Seitenzahl:

```xml
<fw type="pageNum">11</fw>
```

Beispiele für den Spaltensatz:

```xml
<div type="article">
  <head>Die Wunder des Meeres.</head>
  <cb n="1"/>
  <p rend="indent">Der Film <title type="movie">„Die Wunder des Meeres“</title> führt uns<lb/>
  in ein bisher nie gezeigtes Milieu: auf den Grund<lb/>
  ...</p>
</div>

<p>... Aufnahmen dem menschlichen Auge enthüllt. Unge<lb break="no"/>
  heure Schwierigkeiten und Gefahren mußten auf dem<lb/>
  <cb n="2"/>
  Meeresgrunde überwunden werden, um diese Meister<lb break="no"/>
  leistung der kinematographischen Technik zu voll<lb break="no"/>
  ...</p>
```

Beispiel für Paragraph mit Einzug:

```xml
<p rend="indent">Der Film <title
    type="movie"
  >„Die Wunder des Meeres“</title> führt uns<lb />
  in ein bisher nie gezeigtes Milieu: auf den Grund<lb />
  ...</p>
```

Beispiele für Sperrdruck:

```xml
<surname rend="spaced">Williamson</surname>

<head type="columnTitle" rend="spaced">FILM-KRITIKEN</head>

<persName type="historical" ref="#pe5"
  rend="spaced">
  <forename>Sessue</forename>
  <surname>Hayakawa</surname>
</persName>

<hi rend="spaced">Menschen</hi>
```

Das Attribut @rend kann in bereits vorhandenen Elementen ergänzt werden, wie in
den ersten drei Beispielen hier. Soll eine Textstelle, die kein Markup aufweist
als 'gesperrt' annotiert werden, ist das Element `<hi>` 'highlighted' mit dem
Attribut @rend zu benutzen. Analog dazu verhält sich die Annotation von
Fettdruck (@rend=bold), auf Beispiele wurde hier verzichtet.

Beispiel Auflistung innerhalb einer Zeile:

```xml
<list rend="inline">
  <item>
  <orgName type="cinema">Imperial-Kino</orgName>, <address>
    <district>I.,</district>
    <street>Rothgasse 9</street>
  </address>;
  </item>
  ...
  <item>
  <orgName type="cinema">Wienzeile-Kino</orgName>, <address>
    <district>VI.,</district>
    <street>Linke Wienzeile 4</street>
  </address>;
  </item>
</list>
```

Beispiele trennende Ornamente (Sterne, kurze und lange Linie):

```xml
<milestone type="separator"
  unit="subsection" rend="asterisks"/>

<milestone type="separator"
  unit="subsection" rend="hrShort"/>

<milestone type="separator"
  unit="subsection" rend="hrLong"/>
```

Beispiel Abbildung:

```xml
<figure>
  <figDesc>A Swimmer under water</figDesc>
  <graphic url="18_Die-Wunder-des-Meeres_figure.png" />
</figure>
```

Beispiel Abkürzung ohne Angabe der ausgeschriebenen Form:

```xml
<abbr>
  <hi rend="spaced">Sch</hi>.
</abbr>
```

Beispiel Abkürzung mit Angabe der ausgeschriebenen Form:

```xml
<forename full="init">
  <choice>
    <abbr>J.</abbr>
    <expan>John</expan>
  </choice>
</forename>
```

`<choice>` umschließt die Abkürzung und die ausgeschriebene Form. In einer
späteren Darstellung können beide oder aber nur eines der Elemente dargestellt
werden - für die erfolgreiche 'Suche' ist das jedoch nicht relevant.

Beispiele Fehler im Original:

```xml
<title type="journal">„
  <choice>
  <sic>Fimwelt</sic>
  <corr cert="high">Filmwelt</corr>
  </choice>“
</title>

<choice>
  <sic>:</sic>
  <corr cert="high">;</corr>
</choice>
```

Wie bei den Abkürzungen kann auch hier nur das Element `<sic>` verwendet werden,
wenn kein Lösungsvorschlag gegeben werden kann.

Ergänzung eines fehlenden Zeichens:

```xml
<address>
  <district>XVII<supplied reason="missing">.</supplied>,</district>
  <street>Hauptstraße 117</street>
</address>
```

Der Unterschied zwischen Fehlschreibung und Fehldruck ist folgender:
Fehlschreibung 'Huus' statt 'Haus' vs. Fehldruck 'H us' statt 'Haus' - es
handelt sich nicht um einen Schreibfehler, sondern um ein fehlendes Zeichen,
deutlich erkennbar an der Leerstelle.

### 2.4. Einführung: TEI Customization

- Datenmodellierung

- TEI Schema

- TEI Klassen

- TEI-Customization mit Roma

Selten benötigt man in einem Projekt alle von der TEI zur Verfügung gestellten
Komponenten. Daher empfiehlt es sich, das Schema den eigenen Bedürfnissen
anzupassen. Dies erleichtert zum einen die Annotationsarbeit, indem der Editor
nur die für ein Projekt relevanten Elemente und Attribute einblendet. Zum
anderen dokumentiert ein angepasstes Schema die eigene Annotationsstrategie und
macht sie für Dritte nachvollziehbar. Die TEI bietet neben dem Schema 'All'
bereits einige an unterschiedliche Bedürfnisse angepasste und reduzierte
Versionen an wie z.B. 'TEI Lite', 'Corpus', 'Drama' oder 'Speech'. Darüber
hinaus besteht die Möglichkeit, selbst eine Auswahl aus den zahlreichen Modulen
zu treffen, Adaptierungen an bestehenden Elementen und Attributen vorzunehmen
sowie eigene Komponenten hinzuzufügen und entsprechend zu dokumentieren. Mit
[TEI Roma](http://www.tei-c.org/Roma/) steht ein webbasiertes Werkzeug bereit,
dass Sie dabei unterstützt.

![TEI: Kapitel & Module (1)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie87.png)

Verweis [I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html)

![TEI: Kapitel & Module (2)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie88.png)

Verweis [I](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ST.html#STMA)

![TEI Schema?](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie89.png)

Verweis [I](https://tei-c.org/guidelines/customization/)

![ODD?](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie90.png)

![Vereinfachung](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie91.png)

![TEI Klassen](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie92.png)

![ODD-Anpassung (1)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie93.png)

![ODD-Anpassung (2)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie94.png)

![ODD-Anpassung (3)](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie95.png)

![TEI Roma](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie96.png)

Verweis [I](https://roma2.tei-c.org/)

## 3. Block

### 3.1. Einführung: XSLT & XPath

- Transformation, Selektion, Navigation

- Knoten & Achsen

- XPath 'Regular Expressions'

Ein wesentlicher Grundgedanke hinter strukturiertem Markup ist, die annotierten
Inhalte von ihrer Darstellung zu trennen, indem man beides in unterschiedlichen
Dateien speichert. Auf diese Weise lassen sich ein und dieselben Daten mit
verschiedenen Verarbeitungsdokumenten verknüpfen, ohne selbst jedes Mal neu
bearbeitet werden zu müssen. Verfasst werden solche Darstellungsdokumente, auch
'Stylesheets' genannt, mit Hilfe der
[Extensible Stylesheet Language Transformations (XSLT)](https://www.w3.org/Style/XSL/),
einer Sprache, die - wie der Name schon sagt - Inhalte aus XML-Dokumenten
transformieren kann. XSLT-Dokumente legen die Regeln fest, welche Elemente aus
den Quelldokumenten wann und wie in ein Zieldokument übertragen werden sollen.
Man erkennt diese Dateien an der Endung 'xsl'. Dabei kann es 'nur' um die
Darstellung der Daten gehen, es kann sich aber auch um komplexere Operationen
handeln, wie z.B. Daten zu extrahieren, um davon Listen anzulegen, die Belege
nach bestimmten Kriterien sortieren oder zählen lassen usw. Grundsätzlich ist es
unerheblich, ob es sich um die Darstellung oder andere Verarbeitungsanweisungen
handelt. Um Daten zu transformieren, bedient man sich sogenannter Muster oder
'Templates', die definieren, was womit unter welchen Umständen geschehen soll.
Indem man die Elemente mit Hilfe ihrer hierarchischen Position beschreibt,
versetzt man die Software in die Lage, die gewünschten Elemente lokalisieren zu
können. Die Komponente, die diese Adressierungen ermöglicht, heißt 'Extensible
Path Language', kurz 'XPath'. Sie ist in XSLT eingebettet und sorgt dafür,
innerhalb der logischen Struktur von XML-Dokumenten navigieren zu können.

Sie müssen sich die einzelnen annotierten Elemente wie Objekte in einer
Hierarchie vorstellen: die Verzweigungen, die auch als Knoten bezeichnet werden,
sind eindeutig und offensichtlich. In unten angefügtem Beispiel sind 'Buch',
'Kapitel', 'Titel' usw. Knoten, die durch Achsen verbunden sind. Dieses Konzept
der Knoten und Achsen erlaubt es, Pfade in den Dokumenten zu definieren. Das ist
durchaus wörtlich zu verstehen, denn Pfade sind nichts anderes, als Wege durch
den Elementbaum: von Knoten zu Knoten über Achsen. Mit Hilfe dieser Achsen
können einzelne Knoten erst erkannt und anschließend entsprechend
weiterverarbeitet werden. Diese Lokalisierungsschritte lassen sich einfach, oder
verkettet durchführen – es stehen zahlreiche Funktionen und Operatoren zur
Verfügung, u.a. Mengen-, Zahl- und Boolesche Operatoren.

Die Webseite der W3C-Spezifikation finden Sie hier
[https://www.w3.org/TR/xpath/](https://www.w3.org/TR/xpath/), eine online
Einführung unter
[https://www.w3schools.com/xml/xpath_intro.asp](https://www.w3schools.com/xml/xpath_intro.asp).

![XSLT](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie98.png)

Verweis [I](https://www.w3.org/TR/xslt/all/)

![XPath](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie99.png)

Verweis [I](https://www.w3.org/TR/xpath/)

![XPath 'Regular Expressions'](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie100.png)

### 3.2. Praxis: Einfache Auswertungen mit XPath

- Abfragen im Fließtext

- Kombinierte Abfragen im Fließtext und Personen- bzw. Ortsregister

- String-Funktionen

XPath kann auch außerhalb von Stylesheets für komplexe Suchabfragen verwendet
werden. Bitte öffnen Sie die Datei 7_Repraesentation_FW_11_12.xml, sie ist die
Grundlage für die beispielhaften Abfragen, die nun durchgeführt werden sollen.
Öffnen Sie dann das Abfrage-Fenster, indem Sie auf 'Fenster' > 'Ansicht' zeigen
klicken und 'XPath/XQuery Baumeister' auswählen - oXgen sollte nun so aussehen:

![XPath/XQuery Baumeister](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/10_XPATH_Abfrage.png)

Tippen bzw. kopieren Sie eine Abfrage in die erste Zeile des Abfragefensterns
und klicken Sie auf das rote Dreieck darüber bzw. drücken Sie 'Strg+Enter' um
die Abfrage zu starten. Die Suchresultate werden am unteren Ende des
Dokumentenfensters aufgelistet.

Für unser Beispieldokument könnten Abfragen etwa wie folgt aussehen:

- Alle Personennamen im Fließtext: `//body//persName`

- Alle typisierten Personennamen im Fließtext: `//body//persName[@type]`

- Alle fiktionalen Personennamen im Fließtext:
  `//body//persName[@type='fictional']`

- Alle Städtenamen im Fließtext: `//body//placeName[@type='city']`

- Alle Personennamen, mit Ausnahme des Typs "religious", Variante a):
  `//body//persName[not(@type='religious')]`

- Alle Personennamen, mit Ausnahme des Typs "religious", Variante b):
  `//body//persName[@type and @type!='religious']`

- Alle Ländernamen im Fließtext, ohne Duplikate:
  `//body//distinct-values(placeName[@type='country'])`

Kombination Fließtext und Metadaten aus dem Personen- bzw. Ortsregister

- Nur Schauspielerinnen:
  `//persName[substring-after(@ref,'#')=//person[@role="actor"][@sex="F"]/@xml:id]`

- Nur männliche Künstler, die einen Künstlernamen haben:
  `//persName[substring-after(@ref,'#')=//person[@sex="M"][descendant::persName[@type='artistName']]/@xml:id]`

- Nur Städte in Europa:
  `//placeName[substring-after(@ref,'#')=//place[@type="settlement"][descendant::bloc[text()='Europa']]/@xml:id]`

- Nur Länder in Asien:
  `//placeName[substring-after(@ref,'#')=//place[@type="country"][descendant::bloc[text()='Asien']]/@xml:id]`

String-Funktionen

- Absätze, die das Wort "Auge" enthalten: `//body//p[contains(.,'Auge')]`

- Alle Elemente, die das Wort "Auge" enthalten (Duplikate!):
  `//body//*[contains(.,'Auge')]`

- Länge von Absätzen in Zeichen: `//p/string-length(.)`

- Zeichenanzahl des längsten Absatzes: max(//p/string-length(.))

- Zeichenanzahl des kürzesten Absatzes: `min(//p/string-length(.))`

- Der längste Absatz im Dokument:
  `//p[string-length() = max(//p/string-length(.))]`

- Anzahl der Wörter im Fließtext: `//body//tokenize(.,'\s+')`

- Wörter in Absätzen: `//p/count(tokenize(.,' '))`

- Distinkte Wörter im Fließtext: `distinct-values(//body//tokenize(.,'\s+'))`

- Organisationsnamen, die mit "Kino" enden: `//orgName[ends-with(.,'Kino')]`

- Reimwörter in Verszeilen: `//l/tokenize(.,'\s')[last()]`

- Reimwörter nach Reimen gereiht:
  `for $a in ("a", "b", "c", "d") return //l[@rhyme = $a]`

- Verfasserzeilen in Großbuchstaben: `//byline/upper-case(.)`

Folgende Screenshots enthalten die wichtigsten Ausdrücke für Knoten, Achsen und
Operatoren (sie stammen aus oben genanntem W3C-Tutorial):

![Selecting Nodes](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/11_XPATH_Expression.png)

![Predicates](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/12_XPATH_Expression.png)

![Selecting Unknown Nodes](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/13_XPATH_Expression.png)

Verweis [I](https://www.w3schools.com/xml/xpath_syntax.asp)

![XPath Axes](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/14_XPATH_Expression.png)

![Location Path Expression](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/15_XPATH_Expression.png)

![Examples](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/16_XPATH_Expression.png)

Verweis [I](https://www.w3schools.com/xml/xpath_axes.asp)

![XPath Operations](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/17_XPATH_Expression.png)

Verweis [I](https://www.w3schools.com/xml/xpath_operators.asp)

### 3.3. Einführung: Tools

- ... mehr über oXygen

- oXygen TEI Add-On

- OxGarage

- TEI Boilerplate

- TEI Publisher (+ TEI Processing Modell)

- XML-Datenbanken

Es gibt eine Reihe von Tools, die die Arbeit mit TEI-Dokumenten erleichtern und
unterstützen. Aufgabengebiete sind einerseits die Konvertierung von bestehenden
Daten nach TEI-XML bzw. die Unterstützung bei der weiteren manuellen Bearbeitung
damit, und anderseits Hilfsmittel für die effiziente Abfrage von mehreren
TEI-Dokumenten bzw. die Publikation in einer Webapplikation.

![...mehr über OXygen](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie105.png)

Verweis [I](https://regexr.com/)

![oXygen TEI Add-On](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie106.png)

Verweis [I](https://github.com/TEIC/TEI/),
[II](https://faqingperplxd.wordpress.com/2014/04/02/auto-update-your-tei-framework-in-oxygen/)

![OxGarage](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie107.png)

Verweis [I](https://oxgarage.tei-c.org/),
[II](https://github.com/TEIC/Stylesheets)

![TEI Boilerplate](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie108.png)

Verweis [I](https://dcl.ils.indiana.edu/teibp/)

![TEI Publisher](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie109.png)

Verweis [I](https://teipublisher.acdh-dev.oeaw.ac.at/index.html)

![...mehr Tools](/assets/images/cms/posts/xml-tei-oxygen-einführung-praxis/Folie110.png)

Verweis [I](https://tei-c.org/Tools/),
[II](https://wiki.tei-c.org/index.php/Category:Tools)
