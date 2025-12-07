import { CodeComparison2 } from "@/components/CodeComparison";
import Stats from "@/components/Stats";
import { FileCode2, Sparkles } from "lucide-react";

const beforeCode = String.raw`function validateCPF(value: string) {
  const clean = value.replace(/\\D/g, "")
  if (clean.length !== 11 || /(\\d)\\1{10}/.test(clean)) return false

  const calcDigit = (slice: number) => {
    let sum = 0
    for (let i = 0; i < slice; i++) {
      sum += Number(clean[i]) * (slice + 1 - i)
    }
    const rest = (sum * 10) % 11
    return rest === Number(clean[slice])
  }

  return calcDigit(9) && calcDigit(10)
}

const normalisePhone = (phone: string) => {
  const clean = phone.replace(/\\D/g, "")
  if (clean.length !== 11) throw new Error("Telefone inválido")
  return "(" + clean.slice(0, 2) + ") " + clean.slice(2, 7) + "-" + clean.slice(7)
}`;

const afterCode = String.raw`import { Cpf, Cnpj, Pix } from "br-docs";

Cpf.isValid("123.456.789-09"); // true

Cnpj.isValid("11.222.333/0001-81"); // true

Cnh.isValid("12345678901"); // true

Pix.isValid("123.456.789-09"); // true
Pix.isValid("test@example.com"); // true`;

const comparisonPages = [
  {
    name: "before.ts",
    icon: <FileCode2 className="h-4 w-4" />,
    code: beforeCode,
  },
  {
    name: "br-docs.ts",
    icon: <Sparkles className="h-4 w-4" />,
    code: afterCode,
  },
];

export default function WhyUseBrDocs() {
  return (
    <section id="whyuse" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 text-center lg:text-left lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Por que usar o br-docs?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            O br-docs elimina códigos duplicados, regras frágeis e regex perdido
            no projeto — entregando validações precisas, padronizadas e testadas
            para CNPJ, CPF, CEP, CNH, boleto, telefone e muito mais.
          </p>

          <div className="mt-8 space-y-4">
            <Stats />
          </div>
        </div>

        <CodeComparison2 pages={comparisonPages} />
      </div>
    </section>
  );
}
