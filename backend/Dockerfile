FROM php:8.2-cli

WORKDIR /var/www/html

COPY composer.json composer.lock ./

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

COPY . .

EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000", "-t", "./public"]
