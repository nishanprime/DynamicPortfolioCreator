#frontend
server {
    listen 80;
    server_name dynamicportfolio.io www.dynamicportfolio.io;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name dynamicportfolio.io www.dynamicportfolio.io;
    ssl_certificate /etc/letsencrypt/live/dynamicportfolio.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dynamicportfolio.io/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;   
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    
}

# for backend
server {
    listen 80;
    server_name api.dynamicportfolio.io www.api.dynamicportfolio.io;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name api.dynamicportfolio.io www.api.dynamicportfolio.io;
    ssl_certificate /etc/letsencrypt/live/api.dynamicportfolio.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.dynamicportfolio.io/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
