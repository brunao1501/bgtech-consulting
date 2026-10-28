# BGTech Consulting

Site oficial da **BGTech Consulting** — sites profissionais, sistemas sob medida, automações com IA, consultoria em tecnologia e suporte.

## Estrutura

- `dist/index.html`: site em páginas (Início, Soluções, Experimente, Clientes, Sobre e Contato), navegação por endereço (`#solucoes`, `#modelos`…) com transição entre páginas
- Início com carrossel 3D dos modelos e painel de atendimento com IA animado
- Experimente: modelos de sites, demonstração de agendamento e assistente de IA simulado
- Contato com mensagem montada para o WhatsApp e links do Instagram
- Seis modelos navegáveis em `dist/modelos/`
- Layout responsivo e suporte a movimento reduzido

## Executar localmente

Na raiz do projeto:

```bash
python3 -m http.server 8000 --directory dist
```

Acesse `http://localhost:8000`.

## Publicação no Vercel

O projeto é estático e não possui etapa de compilação. O arquivo `vercel.json` define `dist` como diretório de publicação. A branch de produção é `main`.

## Contato

- WhatsApp: (11) 92019-3443
- Instagram: [@bgtech.consulting](https://www.instagram.com/bgtech.consulting/)
- E-mail: bgtechenterprise@gmail.com

> Os nomes e marcas apresentados nos modelos de sites são demonstrativos.
