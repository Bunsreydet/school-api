import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'School API',
            version: '1.0.0',
            description: 'API for managing students, courses, and teachers with JWT authentication',
        },
<<<<<<< HEAD
        components:{
            securitySchemes:{
                bearerAuth:{
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
=======
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Enter JWT token (without Bearer prefix)',
>>>>>>> 7ac09cf4b3452f388a78f1c7cea41858bd05fea0
                },
            },
        },
        security: [
            {
<<<<<<< HEAD
                bearerAuth:[],
=======
                bearerAuth: [],
>>>>>>> 7ac09cf4b3452f388a78f1c7cea41858bd05fea0
            },
        ],
    },
    apis: ['**/controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export const serveSwagger = swaggerUi.serve;
export const setupSwagger = swaggerUi.setup(swaggerSpec);
