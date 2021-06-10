import * as React from "react";
// import styles from "./WebpartDgdmHelloworld.module.scss";
import "./Theme.module.scss";
import { IWebpartDgdmHelloworldProps } from "./IWebpartDgdmHelloworldProps";
// import { escape } from "@microsoft/sp-lodash-subset";
// import { PrimaryButton } from "@fluentui/react/lib/Button";
// import { ProgressIndicator } from "@fluentui/react/lib/ProgressIndicator";

// import Popover from "react-bootstrap/Popover";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as jsdiff from "diff";

const answer = `Vincent (42) woont al enkele jaren zelfstandig in een sociale huurwoning, na een korte periode tijd dakloos te zijn geweest. Hij drinkt veel en z’n appartement is een bende. Hij heeft al 3 jaar ruzie met de buren. Hij wil zelf niets liever dan verhuizen. Een nieuwe start aan de andere kant van stad. Hier wordt hij gepest door de buurt en onderweg naar het winkelcentrum bedreigd door de huidige vriend van zijn ex. Die vriend woont toevallig langs de route naar de supermarkt. Er is al veel en lang hulpverlening in beeld. Onder de hulpverleners is veel verloop: niemand houdt het lang uit, en Vincent stuurt veel mensen weg. Hij is ook boos over veel fouten die professionals in het verleden hebben gemaakt. Hierdoor is volgens Vincent zijn schuldsaneringstraject mislukt. Ook in het conflict met de buren hebben hulpverleners meerdere malen proberen te bemiddelen, maar zowel meneer als zijn buren zijn niet in staat om hun gedrag aan te passen. Vincent heeft schulden maar die zijn (nog) niet problematisch. Alhoewel zijn schulden langzaam oplopen blijft hij voldoen aan z’n vaste lasten. Dit maakt het voor de woningcorporatie lastig om hem uit huis te zetten. Bovendien, telkens als ze hem aanspreken op zijn overlastgevende gedrag houdt hij zich weer een tijdje rustiger. Vincent wil nu alleen nog hulpverleners over de vloer die hem helpen met een nieuwe woning en een oplossing hebben voor zijn €3.500 betalingsachterstand bij de Belastingdienst en de zorgverzekeraar.`;

export const WebpartDgdmHelloworld: React.FunctionComponent<IWebpartDgdmHelloworldProps> = (props) => {

  const [checkMode, setCheckMode] = React.useState(false);
  const [text, setText] = React.useState(
    `Vincent (42) woont al enkele jaren zelfstandig in een sociale huurwoning, na een korte periode tijd dakloos te zijn geweest. Hij woonde eerst in huis bij een vrouw met flinke psychische problemen, maar die zette hem op een gegeven moment van de ene op de andere dag op straat. Dat is gelukkig verleden tijd, maar het gaat nog steeds niet goed met meneer. Hij drinkt veel en z’n appartement is een bende. Hij heeft al 3 jaar ruzie met de buren. Vincent scheldt hen regelmatig uit vanwege het luidruchtige speelgedrag van hun kinderen. Maar de buurt maakt hem belachelijk om zijn gebrek aan inlevingsvermogen. Hij wil zelf niets liever dan verhuizen. Een nieuwe start aan de andere kant van stad. Hier wordt hij gepest door de buurt en onderweg naar het winkelcentrum bedreigd door de huidige vriend van zijn ex. Die heeft haar huidige vriend opgestookt tegen hem. Die vriend woont toevallig langs de route naar de supermarkt. Er is al veel en lang hulpverlening in beeld. Onder de hulpverleners is veel verloop: niemand houdt het lang uit, en Vincent stuurt veel mensen weg. Wat kunnen ze ook voor hem doen? Ze regelen geen ander huis voor hem. Hij is ook boos over veel fouten die professionals in het verleden hebben gemaakt. Zo konden die hulpverleners hem niet niet helpen toen zijn ex hem ooit op straat zette. En had de bewindvoerder geen reserves opgebouwd waardoor hij iets anders kon huren. Hierdoor is volgens Vincent zijn schuldsaneringstraject mislukt. Ook in het conflict met de buren hebben hulpverleners meerdere malen proberen te bemiddelen, maar zowel meneer als zijn buren zijn niet in staat om hun gedrag aan te passen. Overigens is er tegenwoordig ook ruzie om de manier waarop Vincent zijn tuin onderhoudt. Vincent heeft schulden maar die zijn (nog) niet problematisch. Hij heeft nu alleen €3.500 betalingsachterstand bij de Belastingdienst (teveel ontvangen huurtoeslag) en de zorgverzekeraar. Alhoewel zijn schulden langzaam oplopen blijft hij voldoen aan z’n vaste lasten. Doordat hij zuinig leeft, heeft hij de afgelopen maanden netjes zijn huur betaald. Dit maakt het voor de woningcorporatie lastig om hem uit huis te zetten. Zij proberen wel een dossier op te bouwen, maar alleen op basis van de ruzies met de buren en de rotzooi is dat niet makkelijk. Bovendien, telkens als ze hem aanspreken op zijn overlastgevende gedrag houdt hij zich weer een tijdje rustiger. Vincent wil nu alleen nog hulpverleners over de vloer die hem helpen met een nieuwe woning en een oplossing hebben voor zijn €3.500 betalingsachterstand bij de Belastingdienst en de zorgverzekeraar.`
  );
  const diff = jsdiff.diffSentences(text, answer);
  const result = diff.map(function (part: any, index: any) {
    const spanStyle = {
      backgroundColor: part.added
        ? "lightgreen"
        : part.removed
        ? "salmon"
        : "lightgrey",
    };
    const popoverMessageMap: any = [
      {
        removedText:
          "Hij woonde eerst in huis bij een vrouw met flinke psychische problemen, maar die zette hem op een gegeven moment van de ene op de andere dag op straat. Dat is gelukkig verleden tijd, maar het gaat nog steeds niet goed met meneer.",
        explanation:
          "Voor de huidige situatie is het niet zo belangrijk om te weten waarom Vincent dakloos is geraakt.",
      },
      {
        removedText:
          "Vincent scheldt hen regelmatig uit vanwege het luidruchtige speelgedrag van hun kinderen. Maar de buurt maakt hem belachelijk om zijn gebrek aan inlevingsvermogen.",
        explanation:
          "Het maakt niet zoveel uit waar de ruzies over gaan; dat roept alleen maar discussie op over of dit terecht is. Punt is dat dit niet goed gaat.",
      },
      {
        removedText: "Die heeft haar huidige vriend opgestookt tegen hem.",
        explanation:
          "Het maakt niet zoveel uit waar de ruzies over gaan; dat roept alleen maar discussie op over of dit terecht is. Punt is dat dit niet goed gaat.",
      },
      {
        removedText:
          "Wat kunnen ze ook voor hem doen? Ze regelen geen ander huis voor hem.",
        explanation:
          "Dit roept alleen maar meer vragen op: hadden ze iets anders moeten of kunnen doen? Is Vincent terecht boos? Maar voor de uitkomst maakt dat niet uit.",
      },
      {
        removedText:
          "Zo konden die hulpverleners hem niet niet helpen toen zijn ex hem ooit op straat zette. En had de bewindvoerder geen reserves opgebouwd waardoor hij iets anders kon huren.",
        explanation:
          "Dit roept alleen maar meer vragen op: hadden ze iets anders moeten of kunnen doen? Is Vincent terecht boos? Maar voor de uitkomst maakt dat niet uit.",
      },
      {
        removedText:
          "Overigens is er tegenwoordig ook ruzie om de manier waarop Vincent zijn tuin onderhoudt.",
        explanation: "geen beschrijving beschikbaar",
      },
      {
        removedText:
          "Hij heeft nu alleen €3.500 betalingsachterstand bij de Belastingdienst (teveel ontvangen huurtoeslag) en de zorgverzekeraar",
        explanation: "Deze informatie staat ook al in de laatste zin",
      },
      {
        removedText:
          "Doordat hij zuinig leeft, heeft hij de afgelopen maanden netjes zijn huur betaald.",
        explanation:
          "Aangezien je Vincent toch niet uit huis wilt laten zetten, is dit niet zo relevant.",
      },
      {
        removedText:
          "Zij proberen wel een dossier op te bouwen, maar alleen op basis van de ruzies met de buren en de rotzooi is dat niet makkelijk.",
        explanation:
          "Aangezien je Vincent toch niet uit huis wilt laten zetten, is dit niet zo relevant.",
      },
    ];

    let popover: any;

    return <span key={index} style={spanStyle}>{part.value}</span>

    // if (part.removed) {
    //   const foundPopoverObject = popoverMessageMap.find(
    //     (obj: any) => obj.removedText.trim() === part.value.trim()
    //   );
    //
    //   popover = (
    //     <Popover id="popover-basic">
    //       <Popover.Title as="h3">Huidige Situatie</Popover.Title>
    //       <Popover.Content>
    //         {foundPopoverObject
    //           ? foundPopoverObject.explanation
    //           : "geen beschrijving gevonden"}
    //       </Popover.Content>
    //     </Popover>
    //   );
    // }
    //
    // return part.removed ? (
    //   <OverlayTrigger
    //     key={index}
    //     trigger={["hover", "focus"]}
    //     placement="top"
    //     overlay={popover}
    //   >
    //     <span style={spanStyle}>{part.value}</span>
    //   </OverlayTrigger>
    // ) : (
    //   <span key={index} style={spanStyle}>
    //     {part.value}
    //   </span>
    // );
  });

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-3" style={{ textAlign: "left" }}>
              <h2>Oefening: Schrap de zinnen</h2>
              <p>
                De voorbeeldcasus hieronder is te lang en kan op een kortere
                manier geschreven worden. In de vorige oefening heb je geleerd
                waar je naar kunt kijken om de tekst korter te maken.
                Selecteer de tekst waarvan je denkt dat deze weg kan. Klik
                vervolgens op de knop om er een streep door te zetten. Je kunt
                achteraf controleren of je de juiste dingen hebt weggestreept
                of dat je nog wat bent vergeten. Beweeg met je muis over de
                antwoorden voor extra uitleg.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col">
            {!checkMode ? (
              <div className="card">
                <div className="card-header bg-theme-primary text-white py-2">
                  <strong>Voorbeeld casus</strong>
                </div>
                <div
                  className="card-body"
                  style={{ background: "#ececec" }}
                >
                  <textarea
                    className="form-control bg-transparent"
                    rows={20}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  ></textarea>
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="card-header bg-theme-primary text-white py-2">
                  <strong>Antwoorden voorbeeld casus</strong>
                </div>
                <div
                  className="card-body"
                  style={{ background: "#ececec" }}
                >
                  <p style={{ textAlign: "left" }}>{[result]}</p>
                </div>
              </div>
            )}

            <button
              className="btn btn-theme-primary d-block mt-2"
              onClick={() => setCheckMode(!checkMode)}
            >
              <i className="far fa-check-circle"></i>{" "}
              {!checkMode ? "Controleer antwoorden" : "Terug naar invoer"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )};

//  {
//   public render(): React.ReactElement<IWebpartDgdmHelloworldProps> {
//     const [checkMode, setCheckMode] = React.useState(false);
//     const [text, setText] = React.useState(
//       `Vincent (42) woont al enkele jaren zelfstandig in een sociale huurwoning, na een korte periode tijd dakloos te zijn geweest. Hij woonde eerst in huis bij een vrouw met flinke psychische problemen, maar die zette hem op een gegeven moment van de ene op de andere dag op straat. Dat is gelukkig verleden tijd, maar het gaat nog steeds niet goed met meneer. Hij drinkt veel en z’n appartement is een bende. Hij heeft al 3 jaar ruzie met de buren. Vincent scheldt hen regelmatig uit vanwege het luidruchtige speelgedrag van hun kinderen. Maar de buurt maakt hem belachelijk om zijn gebrek aan inlevingsvermogen. Hij wil zelf niets liever dan verhuizen. Een nieuwe start aan de andere kant van stad. Hier wordt hij gepest door de buurt en onderweg naar het winkelcentrum bedreigd door de huidige vriend van zijn ex. Die heeft haar huidige vriend opgestookt tegen hem. Die vriend woont toevallig langs de route naar de supermarkt. Er is al veel en lang hulpverlening in beeld. Onder de hulpverleners is veel verloop: niemand houdt het lang uit, en Vincent stuurt veel mensen weg. Wat kunnen ze ook voor hem doen? Ze regelen geen ander huis voor hem. Hij is ook boos over veel fouten die professionals in het verleden hebben gemaakt. Zo konden die hulpverleners hem niet niet helpen toen zijn ex hem ooit op straat zette. En had de bewindvoerder geen reserves opgebouwd waardoor hij iets anders kon huren. Hierdoor is volgens Vincent zijn schuldsaneringstraject mislukt. Ook in het conflict met de buren hebben hulpverleners meerdere malen proberen te bemiddelen, maar zowel meneer als zijn buren zijn niet in staat om hun gedrag aan te passen. Overigens is er tegenwoordig ook ruzie om de manier waarop Vincent zijn tuin onderhoudt. Vincent heeft schulden maar die zijn (nog) niet problematisch. Hij heeft nu alleen €3.500 betalingsachterstand bij de Belastingdienst (teveel ontvangen huurtoeslag) en de zorgverzekeraar. Alhoewel zijn schulden langzaam oplopen blijft hij voldoen aan z’n vaste lasten. Doordat hij zuinig leeft, heeft hij de afgelopen maanden netjes zijn huur betaald. Dit maakt het voor de woningcorporatie lastig om hem uit huis te zetten. Zij proberen wel een dossier op te bouwen, maar alleen op basis van de ruzies met de buren en de rotzooi is dat niet makkelijk. Bovendien, telkens als ze hem aanspreken op zijn overlastgevende gedrag houdt hij zich weer een tijdje rustiger. Vincent wil nu alleen nog hulpverleners over de vloer die hem helpen met een nieuwe woning en een oplossing hebben voor zijn €3.500 betalingsachterstand bij de Belastingdienst en de zorgverzekeraar.`
//     );
//     const diff = jsdiff.diffSentences(text, answer);
//     const result = diff.map(function (part: any, index: any) {
//       const spanStyle = {
//         backgroundColor: part.added
//           ? "lightgreen"
//           : part.removed
//           ? "salmon"
//           : "lightgrey",
//       };
//       const popoverMessageMap: any = [
//         {
//           removedText:
//             "Hij woonde eerst in huis bij een vrouw met flinke psychische problemen, maar die zette hem op een gegeven moment van de ene op de andere dag op straat. Dat is gelukkig verleden tijd, maar het gaat nog steeds niet goed met meneer.",
//           explanation:
//             "Voor de huidige situatie is het niet zo belangrijk om te weten waarom Vincent dakloos is geraakt.",
//         },
//         {
//           removedText:
//             "Vincent scheldt hen regelmatig uit vanwege het luidruchtige speelgedrag van hun kinderen. Maar de buurt maakt hem belachelijk om zijn gebrek aan inlevingsvermogen.",
//           explanation:
//             "Het maakt niet zoveel uit waar de ruzies over gaan; dat roept alleen maar discussie op over of dit terecht is. Punt is dat dit niet goed gaat.",
//         },
//         {
//           removedText: "Die heeft haar huidige vriend opgestookt tegen hem.",
//           explanation:
//             "Het maakt niet zoveel uit waar de ruzies over gaan; dat roept alleen maar discussie op over of dit terecht is. Punt is dat dit niet goed gaat.",
//         },
//         {
//           removedText:
//             "Wat kunnen ze ook voor hem doen? Ze regelen geen ander huis voor hem.",
//           explanation:
//             "Dit roept alleen maar meer vragen op: hadden ze iets anders moeten of kunnen doen? Is Vincent terecht boos? Maar voor de uitkomst maakt dat niet uit.",
//         },
//         {
//           removedText:
//             "Zo konden die hulpverleners hem niet niet helpen toen zijn ex hem ooit op straat zette. En had de bewindvoerder geen reserves opgebouwd waardoor hij iets anders kon huren.",
//           explanation:
//             "Dit roept alleen maar meer vragen op: hadden ze iets anders moeten of kunnen doen? Is Vincent terecht boos? Maar voor de uitkomst maakt dat niet uit.",
//         },
//         {
//           removedText:
//             "Overigens is er tegenwoordig ook ruzie om de manier waarop Vincent zijn tuin onderhoudt.",
//           explanation: "geen beschrijving beschikbaar",
//         },
//         {
//           removedText:
//             "Hij heeft nu alleen €3.500 betalingsachterstand bij de Belastingdienst (teveel ontvangen huurtoeslag) en de zorgverzekeraar",
//           explanation: "Deze informatie staat ook al in de laatste zin",
//         },
//         {
//           removedText:
//             "Doordat hij zuinig leeft, heeft hij de afgelopen maanden netjes zijn huur betaald.",
//           explanation:
//             "Aangezien je Vincent toch niet uit huis wilt laten zetten, is dit niet zo relevant.",
//         },
//         {
//           removedText:
//             "Zij proberen wel een dossier op te bouwen, maar alleen op basis van de ruzies met de buren en de rotzooi is dat niet makkelijk.",
//           explanation:
//             "Aangezien je Vincent toch niet uit huis wilt laten zetten, is dit niet zo relevant.",
//         },
//       ];
//
//       let popover: any;
//
//       return <p>test</p>;
//
//       // if (part.removed) {
//       //   const foundPopoverObject = popoverMessageMap.find(
//       //     (obj: any) => obj.removedText.trim() === part.value.trim()
//       //   );
//       //
//       //   popover = (
//       //     <Popover id="popover-basic">
//       //       <Popover.Title as="h3">Huidige Situatie</Popover.Title>
//       //       <Popover.Content>
//       //         {foundPopoverObject
//       //           ? foundPopoverObject.explanation
//       //           : "geen beschrijving gevonden"}
//       //       </Popover.Content>
//       //     </Popover>
//       //   );
//       // }
//       //
//       // return part.removed ? (
//       //   <OverlayTrigger
//       //     key={index}
//       //     trigger={["hover", "focus"]}
//       //     placement="top"
//       //     overlay={popover}
//       //   >
//       //     <span style={spanStyle}>{part.value}</span>
//       //   </OverlayTrigger>
//       // ) : (
//       //   <span key={index} style={spanStyle}>
//       //     {part.value}
//       //   </span>
//       // );
//     });
//
//     return (
//       <div className="App">
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <div className="mb-3" style={{ textAlign: "left" }}>
//                 <h2>Oefening: Schrap de zinnen</h2>
//                 <p>
//                   De voorbeeldcasus hieronder is te lang en kan op een kortere
//                   manier geschreven worden. In de vorige oefening heb je geleerd
//                   waar je naar kunt kijken om de tekst korter te maken.
//                   Selecteer de tekst waarvan je denkt dat deze weg kan. Klik
//                   vervolgens op de knop om er een streep door te zetten. Je kunt
//                   achteraf controleren of je de juiste dingen hebt weggestreept
//                   of dat je nog wat bent vergeten. Beweeg met je muis over de
//                   antwoorden voor extra uitleg.
//                 </p>
//               </div>
//             </div>
//
//             <div className="row">
//               <div className="col">
//                 {!checkMode ? (
//                   <div className="card">
//                     <div className="card-header bg-theme-primary text-white py-2">
//                       <strong>Voorbeeld casus</strong>
//                     </div>
//                     <div
//                       className="card-body"
//                       style={{ background: "#ececec" }}
//                     >
//                       <textarea
//                         className="form-control bg-transparent"
//                         rows={20}
//                         onChange={(e) => setText(e.target.value)}
//                         value={text}
//                       ></textarea>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="card">
//                     <div className="card-header bg-theme-primary text-white py-2">
//                       <strong>Antwoorden voorbeeld casus</strong>
//                     </div>
//                     <div
//                       className="card-body"
//                       style={{ background: "#ececec" }}
//                     >
//                       <p style={{ textAlign: "left" }}>{[result]}</p>
//                     </div>
//                   </div>
//                 )}
//
//                 <button
//                   className="btn btn-theme-primary d-block mt-2"
//                   onClick={() => setCheckMode(!checkMode)}
//                 >
//                   <i className="far fa-check-circle"></i>{" "}
//                   {!checkMode ? "Controleer antwoorden" : "Terug naar invoer"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

// return (
//   <div className={ styles.webpartDgdmHelloworld }>
//   <ProgressIndicator />
//     <div className={ styles.container }>
//       <div className={ styles.row }>
//         <div className={ styles.column }>
//           <span className={ styles.title }>Welkom bij het eerste custom blok</span>
//           <p className={ styles.subTitle }>Helemaal opgebouwd vanuit React!.</p>
//           <p className={ styles.description }>{escape(this.props.description)}</p>
//           <a href="https://aka.ms/spfx" className={ styles.button }>
//             <span className={ styles.label }>Lees meer</span>
//           </a>
//
//
//           <input style={{display: "block", width: "100%"}} type="text" placeholder="Voer een naam in" />
//           <input style={{display: "block", width: "100%"}} type="email" placeholder="Voer een e-mailadres in" />
//           <input style={{display: "block", width: "100%"}} type="password" placeholder="Voer een wachtwoord in" />
//
//
//           <PrimaryButton text="Standard" onClick={() => console.log("GEKLIKT")} />
//         </div>
//       </div>
//     </div>
//   </div>
// );
