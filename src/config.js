export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {     
            "type": "service_account",
            "project_id": "dfcoderhouse32065",
            "private_key_id": "ab12efb2b9db78aec3a9cb5677b4f9fa2f2401fb",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCS5tbRr41nh96F\nu/1YrBQbYaj+QR6TMpb53eX+f3ivcJRWRenb7r1kJswiukDR3k3vDt2bp78gBlT0\nRoguE6q3Hx/5AMz9hDuIq2vtpEyZ0IMXrZLgTNpmzHCL9bc2XRozaN9xGVnGMTAE\nZ5XmlAvCjQA/c8OVJzcLdv6kqbjVzO8eBBfYJPMRzzIYdSHq0qURnuo+hU2uXI1H\nrSsXqmbA0hH7M5KbED9h1vJ39nWuVa/TfWiCcU+sThc+XVewt4HXApzGRJZs4KyZ\n3jfdcnTCsGcG1gM46G+vgIwGuCw9Cxj2xY+zPDX1Bl5vvBteBsu0T0UzzZm3uCzb\n8r+Gzq1rAgMBAAECggEABg4TjHwLor9Q1qFR7XqjFe4+ExDORYUmmb3IOGe63gkq\nMnrz2ASTDaw9tzBT8j9f/5Q7LsQvMA8JJ5jUQLxY/O6zy8WSxxMd7+GxwEKIt8Eg\nJ8GYFe+4NtfpZOBBZ34jhNTA4cs7zijPEMQ2Q27jVzPZohC2K8Ri7Ysl+6KIdr0W\nOSXS6HFeUDKmbJmFPMGHJv8zPrkZBsel6JNbz6KFBpMOiQp+UxvLXAT/YRVH5+UD\nNMvszS+dUDdyPWwSPnWR5fg44lgxwbJ89F0atOckgBPDOEoqg2rUHONzqR4B90st\nO6c4MRiaeARRcHr9t6BrKPs290EAAaHEv1IkLebDfQKBgQDHVSL4H5Wpcs16tQJo\nHtlmonsQtLH2+d3bxpMH+Z3oasi/h+BYoHDOivbrOfBr/mzY8QopNOP931s7gzAn\nDxhZCLVhI53ugpawIWKbe6yiKXYa/eZKsytVzLD0HaukS6PyK+EYsWqEaKveZKt7\nY+oRbPMIGQlbh03ioBa7T9RyTwKBgQC8qe7LN+msUSNqCHwE5ORHuBt6SJ7LQRs5\niKOtTQq8CnWrtrtQkl/6FTCewGkq3j/6xdYewhaS5QOvGQ3G9fcIjVq7grTS5NEL\n3Z/aeVi+NjnSzRwl9qSIufWSfhOVXLcsDxLqnVOKRiPoZMod6gHtnX+XtPWS9QaV\n1Qug5IFYJQKBgHLlkBKVoh7aHbbtP0XlAks2vNkUTsCdplRYUcf3Ch497xj3qUls\nsZlcYJeV/g9ByFwEFGdMJV7gsCXNqKPa/53SdzpW3WHtxA4iMESPNSMD4yAL2gKU\n5BXAtv7/W0CImSeuQ0GIgm1wKCE4xd+J6BHDSxMP22T2yN4oiPHPQhXhAoGAEixo\nZUkAiGnUeH1SvQHzf3kbpH7kVP3zimpAIgx+0ThMt3rFtnAzMJrj8RblyoxYK2bt\nRk8573KCFVbbfePppPhA2jkwA/SosnTp1hjEVKZSkZzSblHA7a7EGhVs+4FP372f\n+9ul1XcGNHepBJKrFuGKDeoPkdVqifpYwWnhj8UCgYA5fHwDG6sR12cCYofgd/5O\nD6lfrel4OEnbQ0RJHUcNKa7dYKLZH6OB13XRubsGcDGajtKvkfugdbMZreHIC8M1\n2V78Uk8jFOtE5fNdxmxzHp09vQdYmRZBBtaCjMmZMMd+je2ieAb+4/KH481I/WxR\nnCbSVoLSeJlGECjaAQFB8w==\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-ikrly@dfcoderhouse32065.iam.gserviceaccount.com",
            "client_id": "100765280174006291997",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ikrly%40dfcoderhouse32065.iam.gserviceaccount.com"
        },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'coderhouse'
        }
    }
}
