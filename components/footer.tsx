import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 md:py-8 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col md:flex-row  items-center "
          style={{ justifyContent: "center" }}
        >
          <div className="text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Shehan Jayaranga. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
