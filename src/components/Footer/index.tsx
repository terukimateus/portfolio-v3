import { Github, Cpu as Npm, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-bold">🇧🇷</span>
              <span className="text-lg font-bold gradient-text">br-docs</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Validação de documentos brasileiros, simples e prática.
            </p>
          </div>

          {/* Links */}

          {/* Comunidade */}
          <div>
            <h4 className="font-bold mb-4">Comunidade</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/terukimateus/br-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/br-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  NPM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800! pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 br-docs. MIT License.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.npmjs.com/package/br-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition"
            >
              <Npm size={20} />
            </a>
            <a
              href="mailto:terukimateus@outlook.com"
              className="p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
