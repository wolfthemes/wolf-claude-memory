# ~/.claude/commands/wp-cache-flush.md

Flush the WordPress cache in the current Docker development environment.

## Steps
1. Detect the running WordPress container:
   `docker ps --format '{{.Names}}' | grep -E 'wordpress|wp|app'`
2. Try running `wp cache flush --allow-root` inside the container
3. If wp-cli is not found, install it:

    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    mv wp-cli.phar /usr/local/bin/wp

4. If the `wp` alias is missing, add it:

    echo 'alias wp="docker exec -it <container> wp --allow-root"' >> ~/.bashrc
    source ~/.bashrc

5. Confirm cache was flushed successfully

## Context
- Local Docker environment (WSL2)
- WP-CLI must run with --allow-root inside the container
