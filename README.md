
# ExpertEase Backend
Este es el backend para ExpertEase, una plataforma diseñada para conectar a expertos con quienes buscan conocimientos especializados. Utiliza MongoDB como base de datos y está alojado en Azure para permitir la colaboración y el acceso remoto.

## Base de Datos

Para tener un trabajo de equipo mas facil la base de datos se encuentra hosteada en Azure. Se puede trabajar con una conexion a una base local cambiando la string de conexion.

## Como correr

Se corre como una aplicacion comun de nodejs con el comando:

```javascript
npm install
npm run dev
```

### Diagrama de la base de datos (mermaid.js)

```mermaid.js
erDiagram
    Service ||--o{ Review : "has many"
    Service {
        string name
        string description
        string duration
        string frequency
        number cost
        string category
        string classType
        number rating
        string image
        string location
        string promotion
        number type
        boolean published
        string userEmail
        string userName
    }
    Review ||--o{ Hiring : "has many"
    Review {
        string text
        string name
        number rating
        date postedAt
        string published
        objectId service
    }
    Hiring {
        objectId service
        string status
        string contactPhone
        string contactEmail
        string contactSchedule
        string messageToProvider
    }

```