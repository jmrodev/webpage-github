DISEÑO DE SISTEMAS 3/3
======================


Arquitectura del Sistema
========================


1 Lista de Tareas de la Arquitectura
------------------------------------

En éste punto del SDLC, el objetivo es determinar la arquitectura general para implementar el sistema informático. La arquitectura del sistema traslada el diseño lógico de un sistema informático a una estructura física que incluye hardware, software, soporte de redes, métodos de procesamiento y seguridad. El producto final de la fase de diseño del sistema es la especificación del diseño del sistema. Si éste documento es aprobado, el siguiente paso es la implementación del sistema.

El analista de sistemas debe considerar distintos asuntos que afectarán la elección de la arquitectura.

### Organización y Cultura Corporativa

Para ser exitoso, un sistema informático debe tener un buen desempeño dentro de la organización y cultura de una compañía. Imagine que una compañía le pida a un consultor que sugiera una arquitectura IT que pueda mejorar la productividad y reducir los costos. ¿Cómo se vería afectada la recomendación del consultor por las cuestiones de organización y cultura de la compañía? No existe una respuesta fácil a ésta pregunta. Probablemente el mejor enfoque sea el de estudiar las funciones del negocio del día a día, conversar con los usuarios de todos los niveles y enfocarse en los asuntos de factibilidad operacional; de la misma manera que anteriormente se realizo en el proceso de desarrollo.

### Planificación de Recursos Empresariales

Muchas empresas usan software de planificación de recursos empresariales ("ERP" del inglés "Enterprise Resource Planning") para establecer una estrategia empresarial. Una ventaja del ERP es que describe un entorno especifico de hardware y software, también llamado plataforma, que asegura la conectividad y una fácil integración con futuros sistemas. Muchas compañías extienden los sistemas internos de ERP a sus proveedores y clientes, usando un concepto llamado Gestión de Cadena de Suministros ("SCM" del inglés "Supply Chain Management").

### Costo Inicial y TCO

El TCO incluye las compras tangibles, honorarios y contratos a los que llamamos costos duros. Sin embargo, los costos blandos adicionales de administración, soporte, entrenamiento y tiempo muerto son igual de importante pero mucho más difícil de medir. El analista necesita revisar si han habido cambios que afecten el costo inicial y el TCO para el sistema propuesto. Los requerimientos y alternativas del sistema deben revisarse en éste momento, antes de continuar con el diseño de la arquitectura del sistema.

### Escalabilidad

La escalabilidad, también llamada extensibilidad, se refiere a la habilidad del sistema de expandirse, cambiar o reducirse para adecuarse a las necesidades de los negocios empresariales que no dejan de cambiar. La escalabilidad es especialmente importante en la implementación de sistemas relacionados con el volumen, como los sistemas de procesamiento de transacciones. Un sistema escalable es necesario para dar soporte a los negocios dinámicos y crecientes.

### Integración WEB

El analista de sistemas debe conocer si una aplicación nueva será parte de una estrategia de comercio electrónico y el grado de integración con otros componentes basados en la web. Aún cuando no se involucre el comercio electrónico, una aplicación centrada en la web puede ejecutarse en Internet o en una intranet o extranet corporativa. Una aplicación basada en la web evita mucho de los problemas de conectividad y compatibilidad que aparecen típicamente cuando se involucran diferente entornos de hardware.

### Sistemas Anticuados

Un sistema nuevo puede tener que interactuar con uno o más sistemas anticuados, los cuales pueden usar tecnologías vetustas pero aún en funcionamiento. La interacción, de un sistema nuevo con uno viejo, involucra el análisis de formatos de datos y compatibilidad. En algunos casos, las compañías pueden necesitar convertir archivos de datos viejos, lo cual puede ser un proceso largo y costoso. Para seleccionar la mejor arquitectura, el analista debe conocer si la nueva aplicación reemplazará eventualmente a los sistemas viejos o si deberá coexistir con ellos.

### Opciones de Procesamiento

Dentro de la planificación de la arquitectura, los diseñadores también deben considerar cómo procesara los datos el sistema: en linea o en lote. De la misma forma, si el sistema debe operar en linea 24/7 (las 24 horas del día y los siete días de la semana), se debe disponer de copias de seguridad y recuperaciones rápidas en caso de que falle el sistema.

### Cuestiones de Seguridad

Desde una simple protección con contraseña hasta un complejo sistema de detección de intrusiones, las amenazas de seguridad y sus defensas son la mayor preocupación de los analistas de sistemas. A medida que el diseño físico se traslada al hardware y software específico, el analista debe considerar las cuestiones de seguridad y determinar como es que la compañía se enfrentará a ellas.

### Portales Corporativos

Un portal es la entrada a un sitio web multipropósito. Un portal corporativo puede proveer acceso para los clientes, empleados, proveedores y el público general. Un portal que ha sido bien diseñado se puede integrar con otros sistemas y proveer un "look and feel" consistente a través de múltiples divisiones de la organización.


2 La Evolución de la Arquitectura del Sistema
---------------------------------------------

Cada sistema informático de negocios debe cumplir con tres funciones principales:

* Gestionar aplicaciones que ejecuten la lógica de procesamiento.
* Manejar el almacenamiento de los datos y el acceso a los mismos.
* Proveer una interfaz que permita, a los usuarios, interactuar con el sistema.

Dependiendo de la arquitectura, éstas funciones se pueden ejecutar en un servidor, en el cliente o pueden dividirse entre servidor y cliente. Durante el diseño del sistema, el analista debe determinar dónde se llevara a cabo la función y cerciorarse de las ventajas y desventajas de cada diseño.

### Arquitectura de Unidad Central

Un **servidor** es una computadora que provee datos, servicios de procesamiento o da soporte a otras computadoras llamadas **clientes**. A los primeros servidores se les llamó computadoras de unidad central (en inglés **mainframe**) y al diseño de sistemas donde el servidor ejecuta todo el procesamiento se lo suele llamar arquitectura mainframe. Si bien los servidores de hoy en día no necesitan ser un mainframe, el término de arquitectura mainframe normalmente describe un entorno multiusuario donde el servidor es significativamente más potente que los clientes.

### El Impacto de la Computadora Personal

Cuando la tecnología de la computadora personal ("PC" del inglés "Personal Computer") explotó en la década del 90, se observó un rápido crecimiento de potentes microcomputadores en los escritorios corporativos. Los usuarios encontraron que podían ejecutar un procesador de texto, hojas de cálculos y aplicaciones de bases de datos en un modo llamado computación independiente (en inglés "Stand-Alone Computing"). Las compañías conectaron las computadoras independientes en redes que les permitió compartir datos con los clientes y ejecutar procesamiento local.

Cuando un usuario individual trabaja en modo independiente, la estación de trabajo ejecuta todas las funciones del servidor al almacenar, acceder y procesar los datos. Si bien las computadoras independientes mejoraron la productividad de los empleados y le permitió a los usuarios ejecutar tareas que previamente requerían de asistencia del departamento IT, la computación independiente puede ser ineficiente y costosa. Aún peor, al mantener datos en estaciones de trabajo individuales se disparan las preocupaciones sobre la seguridad, integridad y consistencia de los datos.

### La Evolución de las Redes

A medida que la tecnología se volvió accesible, las compañías resolvieron los problemas de la computación individual al conectar los clientes en una red de área local ("LAN" del inglés "Local Area Network") que permite compartir datos y recursos de hardware. Una red de área amplia ("WAN" del inglés "Wide Area Network") cubre grandes distancias y hasta puede conectar LANs separadas por continentes. A los sistemas corporativos que conectan una o más LANs o WANs se los llama sistemas distribuidos. Comparados con la arquitectura de mainframe, los sistemas distribuidos incrementaron las preocupaciones sobre la seguridad e integridad de los datos.


3 Arquitectura Cliente/Servidor
-------------------------------

El termino cliente/servidor se refiere normalmente a los sistemas que dividen el procesamiento entre uno o más clientes y un servidor central conectados a través de una red. En un sistema cliente/servidor típico, el cliente maneja la interfaz de usuario, incluyendo la entrada de datos, la consulta de datos y la lógica de la presentación en pantalla. El servidor almacena los datos y provee el acceso a los datos y las funciones de la administración de la base de datos. De alguna manera, la lógica de la aplicación está dividida entre el servidor y los clientes.

Para completar la petición de un cliente, el servidor puede necesitar contactar otros servidores por soporte de datos o procesamiento, pero éste proceso es transparente para los clientes.

A medida que las redes de gran escala incrementan su poder, los sistemas cliente/servidor se vuelven más eficientes económicamente. Hoy en día la arquitectura cliente/servidor sigue siendo un diseño de sistemas popular, usando protocolos de Internet y modelos de redes como los descriptos anteriormente. A medida que los negocios forman nuevas alianzas entre clientes y proveedores, el concepto de cliente/servidor se expande para incluir clientes y servidores fuera de la organización. La arquitectura orientada al servicio ("SOA" del inglés "Service-Oriented Architecture") es un ejemplo de un sistema conectado donde un servicio puede ser simultáneamente un cliente y un servidor y puede existir fuera de los limites de la corporación.

La computación en la nube (en inglés "Cloud Computing") es vista por algunos como un concepto totalmente nuevo. Otros la ven como la culminación de la arquitectura cliente/servidor, donde la computación basada en Internet se vuelve la parte "servidor" que administra las tareas de procesamiento, mientras que la misma Internet se convierte en la plataforma que reemplaza las redes tradicionales.

### El Rol del Cliente

La relación cliente/servidor debe especificar cómo se dividirá el procesamiento entre el cliente y el servidor. Mientras que el diseño de "cliente pesado" (en inglés "Rich/Heavy/Fat/Thick Client") ubica toda o la mayoría de la lógica de procesamiento del lado del cliente, el diseño de "cliente liviano" (en inglés "Thin Client") ubica toda o la mayoría de la lógica de procesamiento del lado del servidor.

### Niveles de Cliente/Servidor

A los primeros diseños de cliente/servidor se los llamó "diseño de dos niveles" (en inglés "two-tier design"). En un diseño de dos niveles, la interfaz de usuario reside en el cliente, todos los datos residen en el servidor y la lógica de aplicación puede ejecutarse tanto en el servidor como en el cliente o dividirse entre ambos.

Existe otra forma de diseño de cliente/servidor, llamado "diseño de tres niveles" (en inglés "three-tier design"), que se ha vuelto más popular. En un diseño de tres niveles la interfaz de usuario se ejecuta en el cliente y los datos se almacenan en el servidor, de la misma forma que en el diseño de dos niveles. El diseño de tres niveles también está compuesto de una capa intermedia, ubicada entre cliente y servidor, que procesa las peticiones del cliente y las traduce en comandos que el servidor puede entender y llevar a cabo para acceder a los datos. La capa intermedia puede considerarse como un servidor de aplicación, ya que provee la lógica de la aplicación, o la lógica de negocios, requerida por el sistema. A los diseños de tres niveles también se los llama "diseños de n-niveles" (en inglés "n-tier designs"), para indicar que algunos diseños usan más de una capa intermedia.

### Software Intermedio

En un sistema multiniveles, al software especial que permite que los niveles se comuniquen y que los datos pasen un lado al otro, se lo llama "software intermedio" (en inglés "middleware"). Al middleware también se lo conoce como "software pegamento" (en inglés "glueware"), porque se usa para conectar dos o más componentes de software en una arquitectura de sistema federado.

### Problemas de Costo-Beneficio

Para dar soporte a los requerimientos de negocios, los sistemas informáticos necesitan ser escalables, potentes y flexibles. Para la mayoría de las compañías, los sistemas cliente/servidor ofrecen la mejor combinación de características para cumplir con éstas necesidades. Ya sea que un negocio se expande o contrae, los sistemas cliente/servidor le permiten a la firma escalar el sistema dentro de un entorno que está en constante evolución.

La computación cliente/servidor también le permite a las compañías el transferir aplicaciones desde una plataforma cara como la de los mainframes a una más económica como la de los clientes, a veces moviendo a la nube todo lo relacionado con los procesos pesados (que demandan mayor poder computacional).

### Problemas de Rendimiento

En contraste con los sistemas centralizados, el diseño cliente/servidor separa la aplicación y los datos. Los clientes conectados envían las peticiones de datos al servidor, el cual responde enviando los datos a los clientes. Cuando el número de clientes y la demanda se incrementa más allá de cierto nivel, la capacidad de la red se convierte en un cuello de botella y el rendimiento del sistema decae considerablemente.


4 El Impacto de Internet
------------------------

### Arquitectura Basada en Internet

En un sistema cliente/servidor tradicional, el cliente maneja la interfaz de usuario y el servidor (o servidores en un sistema multi-nivel) maneja los datos y la lógica de aplicación. Se puede decir que parte del sistema se ejecuta en el cliente y otra parte en el servidor. En contraste, en una arquitectura basada en Internet, ademas de los datos y la lógica de aplicación, toda la interfaz de usuario es provista por el servidor web en la forma de documentos HTML que se mostraran en el navegador del cliente. Moviendo la responsabilidad de la interfaz, desde el cliente al servidor, simplifica la transmisión de datos y resulta en menor complejidad y costos de hardware.

### Computación en la Nube

La computación en la nube se refiere al símbolo de nube que a menudo es usado para representar Internet. El concepto de computación en la nube visualiza una nube de computadoras remotas que proveen todo el entorno de software y datos en linea que es alojado por terceros. Por ejemplo, la computadora de un usuario no ejecuta todo el procesamiento o tareas computacionales; es la nube la que realiza todo o parte de ésto. En un sentido, la nube de computadoras actúan como una computadora gigante que ejecuta las tareas para los usuarios.

La computación en la nube elimina efectivamente los problemas de compatibilidad, porque Internet es en si misma la plataforma. Ésta arquitectura también facilita la capacidad de escalar a demanda, ésto es la capacidad de ajustar los recursos en base a las necesidades que se tenga en cualquier momento dado. La computación en la nube es la plataforma ideal para las potentes aplicaciones de SaaS. En ésta arquitectura, los proveedores de servicio pueden realizar actualizaciones y cambios al servicio de una forma muy fácil sin necesidad de involucrar a los usuarios.

Si bien la computación en la nube tiene grandes ventajas, existen algunas preocupaciones. Primero, la computación en la nube puede requerir mayor ancho de banda (la cantidad de datos que pueden transmitirse en un periodo de tiempo fijo) que una red tradicional cliente/servidor. Segundo, como la computación en la nube está basada en Internet, si la conexión a Internet de un usuario falla, el usuario no podrá acceder a ningún servicio basado en la nube. Además, están las preocupaciones relacionadas con la seguridad asociada al intercambio de grandes cantidades de datos a través de Internet, así como la preocupación de almacenar éstos datos de forma segura. Finalmente, está el problema del control; debido a que el proveedor del servicio aloja los recursos y administra el depósito y acceso de los datos, el proveedor tiene total control del sistema.

### WEB 2.0

El cambio a la colaboración basada en Internet se ha vuelto tan enérgico y atractivo que se lo ha llamado WEB 2.0. La WEB 2.0 no es una referencia a una versión de la web actual más avanzada tecnológicamente. Mejor dicho, la WEB 2.0 visualiza una segunda generación de la web que habilita a las personas a colaborar, interactuar y compartir información de manera mucho más dinámica.

Claros ejemplos de la WEB 2.0 son los sitios de redes sociales, como Facebook, Twitter y LinkedIn. A otra forma de colaboración social se la llama wiki. Una de las wikis que mejor se conoce es la Wikipedia.


5 Arquitectura de Comercio Electrónico
--------------------------------------

La gran expansión del comercio en linea está reformando el panorama IT. Las soluciones de negocios en Internet deben ser eficientes, confiables y efectivas económicamente. Cuando se planifica una arquitectura de comercio electrónico (en inglés "e-commerce"), los analistas pueden examinar las siguientes opciones.

### Soluciones Internas

Si se toma una decisión para proceder con una solución interna, debe haber un plan general para ayudar a cumplir con las metas del proyecto. Una solución interna normalmente requiere una gran inversión inicial, pero provee mayor flexibilidad para una compañía que deba adaptarse rápidamente en el entorno dinámico del e-commerce. Al trabajar internamente, la compañía tiene mayor libertad de integrar con clientes y proveedores y es menos dependiente de las soluciones especificas de los proveedores de software y servicios.

Para las pequeñas compañías, la decisión de realizar un desarrollo interno es aún más crítica. Porque éste enfoque requiere de recursos económicos y una atención a la gestión que muchas empresas pequeñas quizás no quieran o no puedan afrontar.

### Soluciones Empaquetadas

Si una empresa pequeña no está dispuesta a afrontar el desafío y complejidad de desarrollar internamente un sitio comercial de Internet, una alternativa puede ser las soluciones empaquetadas. Incluso las medianas y grandes empresas pueden hacer uso de éste tipo de solución. Para los sistemas de gran escala que deban integrarse con aplicaciones existentes, las soluciones empaquetadas pueden ser mucho menos atractivas.

### Proveedores de Servicios

Otra alternativa es la de usar un ASP (del inglés "Application Service Provider"). Un ASP provee de aplicaciones, o de acceso a las aplicaciones, a cambio del cobro de una tarifa por uso o subscripción. Hoy en día muchas ASPs ofrecen servicios de negocios en Internet a gran escala para compañías que deciden tercerizar éstas funciones.


6 Métodos de Procesamiento
--------------------------

### Procesamiento En Linea

Un sistema en linea (en inglés "Online") procesa las transacciones cuando y donde ocurren y provee una salida directa al usuario. Debido a que es interactivo, el procesamiento online evita demoras y permite un dialogo constante entre el usuario y el sistema. Un sistema de reservas de boletos aéreos es un buen ejemplo de procesamiento online. El procesamiento online también puede ser usados con sistemas orientados a archivos, como los ATM.

Los sistemas de procesamiento online tienen cuatro características típicas:

1. El sistema procesa las transacciones completamente cuando y donde ocurren.
2. Los usuarios interactúan directamente con el sistema informático.
3. Los usuarios pueden acceder aleatoriamente a los datos.
4. El sistema informático debe estar disponible cuando sea necesario para dar soporte a las funciones del negocio.

### Procesamiento En Lote

El procesamiento en lote (en inglés "Batch") significa que los datos son administrados en grupos o lotes. Para la mayoría de las firmas, en la década de 1960, ésta fue la única opción. Hoy en día, la mayoría de los negocios necesitan información en tiempo real para operar y el procesamiento en lote no es siempre algo deseado. Sin embargo, los métodos en lote pueden ser más eficientes y convenientes en ciertas circunstancias.

Dentro de las ventajas de los métodos en lote, podemos ver:

* Las tareas pueden planificarse y ejecutarse en un momento predeterminado, sin la intervención del usuario.
* Los programas en lote que requieran mayor cantidad de recursos pueden ejecutarse en momentos donde se reduzcan los costos y el impacto en el tráfico de la red.
* Un método en lote es perfecto para minimizar las preocupaciones de seguridad, auditoría y privacidad; ya que éstos se ejecutan en un entorno relativamente controlado.


7 Modelos de Redes
------------------

### El Modelo OSI

Dentro de la discusión sobre la arquitectura del sistema se introdujeron términos básicos de redes como cliente, servidor, LAN, WAN, arquitectura cliente/servidor, capas, middleware y computación en la nube. Para entender completamente cómo se configuran las redes, se necesita entender el modelo de Interconexión de Sistemas Abiertos ("OSI" del inglés "Open Systems Interconnection").

El modelo OSI describe como se se mueven los datos de una aplicación en una computadora conectada a otra aplicación en otra computadora. El modelo OSI consiste de siete capas y cada capa tiene una función especifica. El modelo OSI provee estándares de diseño físicos que aseguran una conexión de red perfecta, sin importar el entorno de hardware especifico.

### Topología de Red

A la forma en la que una red es configurada se la llama topología de red. La topología se puede referir a una vista física o lógica de la red. Por ejemplo, la topología física describe el cableado y las conexiones de la red, mientras que la topología lógica describe la forma en que interactúan los componentes.

Las redes LAN y WAN normalmente están organizadas en cuatro patrones: árbol, bus, anillo y estrella. Los conceptos son los mismos sin importar el tamaño de la red; pero la implementación física es diferente para una WAN de gran escala, que abarca todo el negocio de una empresa, comparada con la implementación que necesita una LAN chica, ubicada en un sólo departamento.

* RED EN ÁRBOL: En una red en árbol (en inglés "Tree Network") uno o más servidores controlan toda la red. Servidores departamentales controlan los niveles inferiores de procesamiento y dispositivos de red. Un ejemplo de una red en árbol puede ser el de una cadena de venta de indumentaria; con una computadora central que almacena los datos sobre las ventas y el inventario, y con computadoras locales que administran las transacciones de cada local.  
Una desventaja de una red en árbol es que si un negocio agrega más niveles de procesamiento, la red se vuelve más compleja y costosa para operar y mantener. Las redes en árbol normalmente fueron usadas en los sistemas mainframe tradicionales, los cuales ya no son tan comunes hoy en día.
* RED BUS: En una red bus (en inglés "Bus Network") hay un único camino de comunicación que conecta el servidor central, los servidores de los departamentos, las estaciones de trabajo y los dispositivos periféricos. La información se transmite en cualquier dirección entre los dispositivos conectados y todos los mensajes viajan sobre el mismo bus central. Las redes bus requieren menor cableado que otras topologías, ya que se usa un solo cable. Los dispositivos también pueden ser conectados o desconectados de la red en cualquier punto sin generar disturbios en el resto de la red. Ademas, una falla en una estación de trabajo no afectará necesariamente al resto de las estaciones de trabajo.  
Una desventaja importante de las redes bus es que si el bus central se daña, se corta toda la red. Otra desventaja es que el rendimiento general decae a medida que se agregan más usuarios y dispositivos, ya que todo el tráfico debe fluir a través del bus central.  
La red bus es una de las topologías de red LAN más viejas y es una forma muy simple de conectar múltiples estaciones de trabajo.
* RED EN ANILLO: Si bien las redes en anillo (en inglés "Ring Network") aún se pueden seguir viendo, se las puede considerar anticuadas. IBM fue el líder en lo que concierne a topologías de redes de anillo, ya que ellos introdujeron su LAN Token Ring y las grandes compañías que usaban mainframes de IBM implementaron su diseño de red. Una red en anillo se asemeja a un círculo donde los datos fluyen en un sólo sentido desde un dispositivo al siguiente. En funcionamiento, a una red en anillo se la puede ver como a una red bus con su final conectado.  
Una desventaja de las red en anillo es que si un dispositivo conectado falla, los dispositivos que le sigan no podrán conectarse con la red.
* RED EN ESTRELLA: Debido a su velocidad y versatilidad, las redes en estrella (en inglés "Star Network") son una topología LAN muy popular. Una red en estrella tiene un dispositivo central llamado switch, que administra la red y se comporta como un conducto de comunicación para todo el tráfico de la red. Un switch funciona como un alargue eléctrico con múltiples enchufes, pero en lugar de enchufar dispositivos eléctricos (como la heladera, el microondas, la batidora, etc) se enchufan servidores, estaciones de trabajos, impresoras, etc.  
Una configuración en estrella provee un alto control de la red, ya que todo el tráfico fluye a través del switch. Una desventaja inherente del diseño en estrella es que toda la red depende del switch.
* RED EN MALLA: En una red en malla (en inglés "Mesh Network"), cada nodo se conecta con cualquier otro nodo. Mientras éste diseño es extremadamente confiable, también es más caro de instalar y mantener. Una red en malla se asemeja a Internet en que un mensaje puede viajar a través de múltiples caminos. Teniendo en cuenta que la red en malla fue desarrollada originalmente para aplicaciones militares, la principal ventaja es la redundancia, ya que múltiples caminos proveen de respaldo si aparece un problema de comunicación o si algunos nodos se vuelven inoperables.

### Dispositivos de Red

Las redes como las LAN y WAN pueden interconectarse usando dispositivos llamados enrutadores (en inglés "Routers"). Un router es un dispositivo que conecta segmentos de una red, determina el camino más eficiente para los datos y guía el flujo de éstos.

Usando un router, cualquier topología de red puede conectarse a una red más grande y diferente como Internet. A ésta conexión se la llama puerta de enlace (en inglés "Gateway"). También existe un dispositivo llamado servidor intermedio (en inglés "Proxy Server") que provee de conexión a Internet a los usuarios internos de una LAN. La gran mayoría de las redes de negocios usan routers para integrar toda la arquitectura de la red.


8 Dispositivos Inalámbricos
---------------------------

Una red de área local inalámbrica ("WLAN" del inglés "Wireless Local Area Network") es relativamente económica de instalar y se ajusta muy bien a los grupos de trabajo y a los usuarios que no están asignados a un escritorio o lugar especifico.

De la misma forma que con sus contrapartes cableadas, las redes inalámbricas tienen ciertos estándares y topologías que se verán a continuación.

### Estándares

Las redes inalámbricas se basan en varios estándares y protocolos que aún siguen evolucionando. El más popular de éstos se llama IEEE 802.11, el cual es una familia de estándares desarrollados por el Instituto de Ingenieros Eléctricos y Electrónicos ("IEEE" del inglés "Institute of Electrical and Electronics Engineers") para las LAN inalámbricas.

Las redes inalámbricas actuales están basadas en variaciones del estándar original 802.11. Existen muchas versiones, o correcciones, que intentan mejorar el ancho de banda, el rango de alcance y la seguridad. El conjunto de estándares de la IEEE 802.11 cambia rápidamente, en gran parte debido a la presión que ejercen los grupos de consumidores y a los líderes de la industria que se mueven hacia redes inalámbricas cada vez más rápidas. La velocidad de las redes inalámbricas se mide en Megabits por Segundo ("Mbps" del inglés "Megabits Per Second") o Gigabits por Segundo ("Gbps" del inglés "Gigabit Per Second").

### Topologías

De la misma forma que con las redes cableadas, las redes inalámbricas también pueden agruparse en diferentes topologías. De las topologías disponibles para las WLAN IEEE 802.11, las dos más comunes son el Conjunto de Servicios Básicos ("BSS" del inglés "Basic Service Set") y el Conjunto de Servicios Extendidos ("ESS" del inglés "Extended Service Set").

A la topología BSS también se la conoce como el modo de infraestructura. En ésta configuración, un dispositivo cableado central, llamado Punto de Acceso Inalámbrico ("WAP" del inglés "Wireless Access Point"), es usado para servir a todos los dispositivos inalámbricos. El WAP es similar al switch de la topología estrella de la LAN, con la excepción de que provee servicios de red a clientes inalámbricos en lugar de a clientes cableados. Debido a que los WAP usan un único medio de comunicación, el aire, éstos transmiten todo el tráfico a todos los clientes. Normalmente, el WAP está conectado a una red cableada, de tal forma que los clientes inalámbricos puedan acceder a la red cableada.

La segunda topología, ESS, está compuesta por dos o más redes BSS. De ésta forma, al usar una topología ESS, el acceso inalámbrico puede expandirse para tener mayor cobertura. Cada WAP provee servicios inalámbricos en un rango limitado. A medida que un cliente se mueve fuera del alcance de un WAP y entra en el área de cobertura de otro WAP, automáticamente se produce un proceso llamado Itinerancia (en inglés "Roaming") que hace que los clientes se conecten con el WAP más fuerte, permitiendo un servicio ininterrumpido.

### Tendencias

La tecnología inalámbrica trajo un cambio explosivo a la industria IT y continuará afectando a los negocios, los individuos y la sociedad. Aún en el constantemente cambiante mundo IT, será difícil encontrar otra área más dinámica que la de la tecnología inalámbrica.

Con la creciente popularidad del 802.11, muchas compañías ofrecen productos, servicios e información en red. Uno de los grupos más significativos es el de la Alianza Wi-Fi, que mantiene el sitio [www.wi-fi.org](). El objetivo de ésta alianza es el de mejorar la experiencia de usuario a través de la interoperabilidad entre productos.

Si bien disponen de muchas ventajas, las redes inalámbricas también tienen limitaciones y desventajas. Por ejemplo, los dispositivos que usan la banda de frecuencia de 2.4 GHz pueden recibir interferencias de dispositivos como los microondas y teléfonos inalámbricos que usan la misma frecuencia. Aún más importante, las redes inalámbricas generan preocupaciones de seguridad ya que las transmisiones inalámbricas son mucho más susceptibles a ser interceptadas e interferidas que las redes cableadas.

Además de las Wi-Fi, existe otra forma de transmisión inalámbrica llamada Bluetooth, la cual es popular para comunicaciones inalámbricas de corta distancia y que no requieran de mucha energía.


9 Completando el Diseño del Sistema
-----------------------------------

La arquitectura del sistema maraca el fin de la fase de Diseño de Sistemas del SDLC. Recordemos que en la fase de Análisis de Sistemas, se identificaron y documentaron todas las primitivas funcionales con descripciones de procesos. El objetivo era el de identificar las funciones del sistema y determinar que debería hacer cada modulo lógico, sin intención de determinar cómo se llevará a cabo cada función. Al moverse de las tareas de análisis a las de diseño, el proceso de desarrollo continuó con consideraciones de diseño de salida de datos e interfases de usuario, diseños de datos y cuestiones de arquitectura de sistemas.

Las actividades finales en la fase de diseño del sistema son la de preparar una especificación del diseño del sistema, obtener la aprobación de los usuarios y realizar una presentación para la junta directiva.

### Especificaciones del Diseño del Sistema

La especificación del diseño del sistema es un documento que presenta el diseño completo para un nuevo sistema informáticos, junto con el detalle de los costos, el personal y el cronograma para completar la siguiente fase de implementación del SDLC.

La especificación del diseño del sistema es la base sobre la cual el sistema en funcionamiento se medirá y está orientada a los programadores que la usarán para crear los programas necesarios. Algunas secciones del documento de requerimientos del sistema se repetirán en la especificación de diseño del sistema, como las descripciones de procesos, las entradas del diccionario de datos y los diagramas de flujos de datos.

Una especificación de diseño de sistema normalmente contiene las siguientes secciones:

1. RESUMEN DE GESTIÓN: Aquí se presenta un breve repaso del proyecto para los administradores y ejecutivos.
2. COMPONENTES DEL SISTEMA: Ésta sección contiene todo el diseño del nuevo sistema, incluyendo la especificación de la interfaz de usuario, las salidas, las entradas, los archivos, las bases de datos y la red. Los documentos fuente, la disposición de los reportes y pantallas, los DFDs y cualquier otra documentación relevante debe ser incluida. Además, también debe incluirse los requerimientos para todo el soporte de procesamiento, como las copias de respaldo y su restablecimiento, los procesos de inicio y archivos. Si la compra de un paquete de software es parte de la estrategia, hay que incluir la información de cualquier interfaz requerida entre el paquete y el sistema en desarrollo. Si se utiliza una herramienta de diseño CASE, los diagramas de diseño y la mayoría del resto de la documentación puede producirse directamente desde la herramienta.
3. ENTORNO DEL SISTEMA: Ésta sección describe las restricciones o condiciones que afectan al sistema, incluyendo cualquier requerimiento que involucre operaciones, hardware, software de sistemas o seguridad.
4. REQUERIMIENTOS DE IMPLEMENTACIÓN: En ésta sección se especifican los procesos de inicio, la entrada o adquisición de datos inicial, los requerimientos de entrenamiento de usuarios y los planes de prueba del software.
5. ESTIMACIONES DE TIEMPO Y COSTOS: Ésta sección provee una agenda detallada, estimaciones de costos y los requerimientos de personal para la fase de desarrollo del sistema; también provee las proyecciones para lo que queda del SDLC. También se presentan los costos totales para el proyecto y la comparación de éstos costos con estimaciones anteriores.
6. MATERIAL ADICIONAL: Si es de ayuda, también se puede incluir otro material, como documentos de las fases anteriores, al final de la especificación del diseño del sistema. 

### Aprobación de los Usuarios

Los usuarios deben revisar y aprobar el diseño de la interfaz, el diseño de los reportes y menúes, las pantallas de entrada de datos, los documentos fuentes y otras áreas del sistema que los afecte. El proceso de revisión y aprobación continúa a través de la fase de diseño de sistemas. Cuando se completa el diseño para un reporte, el analista de sistemas debe reunirse con los usuarios para revisar el prototipo, ajustar el diseño si es necesario y obtener una aprobación por escrito.

Otros miembros del departamento IT también deberían revisar las especificaciones del diseño del sistema. La administración IT se encargará del personal, los costos, los requerimientos de hardware y software de sistemas, el impacto de la red y el efecto en el entorno operativo una vez que se agregue el nuevo sistema. El equipo de programación tendrá que estar listo para su función y el grupo de operaciones estará interesado en el soporte de procesamiento, distribución de reportes, cargas de red, la integración con otros sistemas y cualquier problema de hardware o software para el cual deben estar preparados.

### Presentaciones

La primer presentación se realiza a otros analistas de sistemas, programadores y miembros del personal de soporte técnico; quienes estarán involucrados en las próximas fases del proyecto o en el soporte operacional del sistema. Debido a la audiencia, la presentación será técnica.

La siguiente presentación es para el departamento de administradores y a los usuarios de los departamentos afectados por el sistema. El objetivo principal es el de obtener el soporte y la aprobación del diseño del sistema. Está dirigida a la interacción de los usuarios con el sistema y al interés de los administradores en el presupuesto, los cronogramas, personal y el impacto en el entorno de producción.

La presentación final será destinada a la gerencia. En éste punto se tiene que disponer de la aprobación de todas las presentaciones anteriores y debería incluirse a los usuarios y al departamento IT. Ésta presentación tiene un objetivo clave: obtener la aprobación de la gerencia y el soporte para el próximo paso de desarrollo.

Basados en la presentación y en los datos enviados, la gerencia podría llegar a una de las siguientes decisiones: proceder con el desarrollo del sistema, realizar más trabajo en la fase de diseño del sistema o terminar con el proyecto.
