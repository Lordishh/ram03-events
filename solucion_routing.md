<p align='left'>
  <img src="https://www.frba.utn.edu.ar/wp-content/uploads/2019/10/logo-UTNBA-PNC-2016-2019-e1570223041254.png" />
</P>

<a id="top"></a>

---

---

# `Solución homework`

---

En primer lugar nos pedía realizar un componente `NotFoundPage.jsx` dentro de nuestro directorio "pages" para los casos que nuestro enrutador no haga match con nuestras rutas.

Crearé este componente con la siguiente estructura:

---

![Context](./src/assets/sol-1.png)

---

También nos podía exportar este componente en nuestro archivo de barril.

---

![Context](./src/assets/sol-2.png)

---

Luego nos pedía crear nuestra ruta, de la cual su `path` iba a ser "/\*", el comodín indicaría que todo lo que venga después de nuestra barra o slash y no haga match con ninguna de nuestra rutas, nos llevaría a nuestro componente `NotFoundPage.jsx` recién creado.

---

![Context](./src/assets/sol-3.png)

---

resultado hasta el momento:

---

![Context](./src/assets/sol-3.1.png)

---

El siguiente paso era crear un directorio `pages` dentro de nuestro directorio `auth`, que este mismo contendría nuestras dos páginas, una de login y otra de registro. Por el momento los componentes de página no requerían de maquetación `jsx`.

---

![Context](./src/assets/sol-4.png)

---

El quinto paso era crear dentro de nuestro directorio `auth` nuestro archivo de barril y exportar tanto el componente `LoginPage` como el componente `RegisterPage`.

---

![Context](./src/assets/sol-5.png)

---

En el sexto paso debíamos crear las rutas en nuestro `AppRouter.jsx` de los componentes de página `"LoginPage"` y `"RegisterPage"`, el path era a elección, yo pondré ingresar para el "login" y registro para el "register".

---

![Context](./src/assets/sol-6.png)

---

Y por último nos pedía en nuestro componente `NavbarComponent.jsx`, que al dar clic en ingresar, nos dirigiera a la ruta que contenía nuestro componente `LoginPage`. Para esto debíamos usar el componente `Link` que nos ofrece la librería de `react-router-dom`.

![Context](./src/assets/sol-7.png)

Bueno, cambie el texto ingresar por `Iniciar sesión`. Con esto ya hemos terminado nuestra tarea. Espero lo hayan podido lograr o al menos intentado de hacer.

---

---

Los invito a intentar completar el siguiente TUTORIAL en el archivo `"TUTORIAL.md"`.

[**subir**](#top)
