// qui dentro scriveremo i nostri test, per App e (per comodità) gli altri che creeremo in questa cartella "tests"
// i file devono chiamarsi obbligatoriamente *.test.jsx, *.spec.jsx

import { fireEvent, render, screen } from "@testing-library/react";
// import { describe, expect, it } from "vitest";
import App from "../App";

// sequenza dei passaggi per effettuare un test in modo corretto è:
// 1) Renderizzazione del componente da testare (nel Virtual DOM)
// 2) Individuazione degli elementi con cui interagire (selezione tramite metodi get(All)by... ecc)
// 3) (OPZIONALE) Esecuzione di eventuali interazioni con gli elementi (es. click, type, dblClick, drop...)
// 4) La verifica delle aspettative, analizzando i risultati

// creiamo il gruppo di test (anche detta suite) tramite il metodo describe
// ogni suite si riferisce a una certa cosa da testare, con più modalità e quindi più test specifici
describe("h1 in the page", () => {
  // qui dentro inseriremo TUTTI i test relativi a questa specifica suite (relativi al nostro h1)

  // per creare un test possiamo usare la keyword "test" oppure "it"
  // (sono variabili globali, date dalla configurazione di vite.config.js)
  //   test("nome del test", () => {}); // esempio con test

  // esempio con it, questo permette la dichiarazione in forma più discorsiva
  it("mounts the h1 correctly", () => {
    // 1) Montiamo il componente App nel DOM virtuale
    render(<App />);

    // screen.debug(); // serve a visualizzare gli elementi renderizzati
    //(non è necessario per il funzionamento ma solo come metodo di debugging)

    // 2) andiamo a cercare l'elemento tramite il suo contenuto testuale,
    // così come farebbe il nostro utente nel leggerlo

    // dato che ci aspettiamo che l'elemento SIA GIA' nella pagina, useremo un metodo, il getBy*,
    // che ci ritorna l'elemento se trovato, o ritorna un errore (fa fallire il test)
    //  in caso in cui non lo trovi. NON E' adatto a cercare l'assenza dell'elemento.

    // screen.getByText("A simple react-test Example");
    const heading = screen.getByText(/a simple react-test example/i);
    // 3) non c'è interazione (utente) con metodi specifici

    // 4) verifica delle aspettative con dei metodi chiamati "matchers"
    expect(heading).toBeInTheDocument();
  });

  // test per verificare l'assenza dell'h1, ovviamente useremo una versione o l'altra, non potranno essere entrambi veri in contemporanea!

  //   it("tests the absence of h1 in the document", () => {
  //     render(<App />);
  //     // screen.debug();
  //     // screen.getByText("A simple react-test Example");
  //     const heading = screen.queryByText(/a simple react-test example/i);
  //     expect(heading).toBeNull();
  //   });
});

describe("checkbox functionality", () => {
  it("tests the unchecked status of a checkbox by default", () => {
    // 1) monto app nel virtual DOM
    render(<App />);

    // 2) vado a cercare l'elemento label tramite il suo label text
    const input = screen.getByLabelText(/check me/i); // ci ricava l'input tramite selezione della sua label oppure undefined

    // 3) non verifichiamo ancora l'interazione...
    // 4) verifichiamo che ci sia una label con conseguente input associato
    expect(input).toBeInTheDocument();

    // 4b) verificare che l'input non sia ancora selezionato (checked)
    expect(input).not.toBeChecked();
  });

  it("checks wheather clicking the label activates the checkbox", () => {
    render(<App />);

    // 2) vado a cercare l'elemento label tramite il suo label text
    const input = screen.getByLabelText(/check me/i);

    // 3) interazione di tipo click sulla label/input
    fireEvent.click(input);

    // 4) verifica delle aspettative: l'input dovrebbe avere cambiato stato in checked
    expect(input).toBeChecked();
  });
});
