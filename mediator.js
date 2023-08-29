// El objeto mediador
class Mediator {
  constructor() {
    this.colleagues = [];
  }

  addColleague(colleague) {
    this.colleagues.push(colleague);
  }

  notifyColleagues(event) {
    this.colleagues.forEach((colleague) => {
      colleague.onEvent(event);
    });
  }
}

// Los objetos colegas
class Colleague1 {
  constructor(mediator) {
    this.mediator = mediator;
  }

  onEvent(event) {
    console.log(`Colleague1 received event: ${event}`);
  }
}

class Colleague2 {
  constructor(mediator) {
    this.mediator = mediator;
  }

  onEvent(event) {
    console.log(`Colleague2 received event: ${event}`);
  }
}

// Ejemplo de uso
const mediator = new Mediator();
const colleague1 = new Colleague1(mediator);
const colleague2 = new Colleague2(mediator);

mediator.addColleague(colleague1);
mediator.addColleague(colleague2);

mediator.notifyColleagues("Hola Ingenieros");
