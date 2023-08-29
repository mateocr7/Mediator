# Mediator
👨‍💻
El patrón mediador define un objeto que encapsula cómo un conjunto de objetos interactúan. Este patrón de diseño está considerado como un patrón de comportamiento debido al hecho de que puede alterar el comportamiento del programa en ejecución. Habitualmente un programa está compuesto de un número de clases.
👩‍💻
En este ejemplo, tenemos dos objetos colegas, Colleague1 y Colleague2. Estos objetos representan dos partes de un sistema que necesitan comunicarse entre sí. Por ejemplo, podrían representar dos componentes de una interfaz de usuario, o dos módulos de un programa.
🧑‍💻
El objeto Mediator es el mediador entre los dos objetos colegas. El objeto mediador es responsable de encapsular cómo los objetos colegas interactúan entre sí.

Cuando Colleague1 necesita comunicarse con Colleague2, llama al método notifyColleagues() del objeto mediador. El método notifyColleagues() del objeto mediador llama al método onEvent() de Colleague2. Esto permite que Colleague1 y Colleague2 se comuniquen entre sí sin estar acoplados directamente.
☺️
En otras palabras, el objeto mediador actúa como un intermediario entre Colleague1 y Colleague2. El objeto mediador es responsable de hacer que los objetos colegas se comuniquen, sin que los objetos colegas tengan que conocer directamente a los demás.
