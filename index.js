const express = require('express');

const app = express();
/**Rota / Recursos */
/**Métodos HTTP:
 *  GET: Buscar uma informação do back-end
 */
app.get('/', (request, response) => {
    return response.json({
        evento: 'Rainer Cordeiro',
        meta: 'Ser programador'
    });
});
app.listen(3000);
