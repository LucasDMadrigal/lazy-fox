# Lazy Fox

### Una pequeña ejercicio para trabajar el Manejo de DOM con JS vanilla. La idea es muy simple. solo muestra un listado de fotos de zorros utilizado el lazy loading.

Para probarla puedes descargar el repositorio y abrirla en tu navegador de forma local.

No tiene grandes complejidades, pero vemos como el patron de **lazy loading** evita tener que cargar recursos (en este caso las imagenes de zorritos) sin necesidad, por que basicamente no las vemos.

Si abres la consola veras un log de "***imagen pedida* **" cada vez que se carga una imagen. de esta forma podras llevar el conteo real de las imagenes que se cargaron.

Pero Hey! has la prueba. lleva el cursor de la pagina hasta el final, y veras como las imagenes solo se piden cuando se intersectan con el observador o estan cerca de hacerlo.
