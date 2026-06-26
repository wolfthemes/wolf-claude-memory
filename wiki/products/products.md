# Products

Long-lived assets and repositories. See [[wiki/concepts/fse-stack-architecture|FSE Stack Architecture]] for how the FSE products relate to each other.

## FSE Stack (active development)

- [[wiki/products/wolf-blank/wolf-blank|wolf-blank]] — FSE base theme. Zero WP default styling, design token slots for child themes.
- [[wiki/products/seijaku-fse/seijaku-fse|seijaku-fse]] — FSE child theme powering wolfthemes.com redesign. Light, editorial, Lexend + electric blue.
- [[wiki/products/wolf-store/wolf-store|wolf-store]] — WordPress plugin: theme marketplace backend (OOP PHP + REST API) + React frontend.
- [[wiki/products/wolf-blocks/wolf-blocks|wolf-blocks]] — Reusable Gutenberg blocks (stats, testimonials, pricing). Consumes theme tokens.

## Legacy Stack (ThemeForest — maintained, not extended)

- [[wiki/products/themeforest-portfolio/themeforest-portfolio|themeforest-portfolio]] — 48 premium WordPress themes. Organized by category with positioning notes.
- [[wiki/products/wolf-core/wolf-core|wolf-core]] — Core functions plugin shared across all legacy themes.
- [[wiki/products/wolf-visual-composer/wolf-visual-composer|wolf-visual-composer]] — WPBakery Page Builder extension for legacy themes.

## Infrastructure & Tools

- [[wiki/products/wolfthemes-wiki/wolfthemes-wiki|wolfthemes-wiki]] — VitePress docs site at wiki.wolfthemes.com.
- [[wiki/products/ai-crew/ai-crew|ai-crew]] — Python/CrewAI automation for support and operations.
- [[wiki/products/guty/guty|guty]] — TypeScript CLI compiling JSX/TSX into WordPress Gutenberg block markup (FSE templates/parts/patterns). Standalone repo (`wolfthemes/guty`) inside the wolf-store-docker workspace.

## Personal

- [[wiki/products/constantin.saguin.com/constantin.saguin.com|constantin.saguin.com]] — Personal portfolio/CV site. Terminal design system (dark, orange accent, DM Mono).
