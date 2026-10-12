# Opera Trade — sito web

Nuovo sito di [operatrade.it](https://www.operatrade.it): arredo e contract italiano per progetti internazionali.
Una pagina unica in cinque lingue (italiano, inglese, russo, azero, albanese), costruita con Next.js e pubblicata su Vercel.

## Dove si cambia cosa

| Cosa | Dove |
|---|---|
| Tutti i testi, in ogni lingua | `src/i18n/dictionaries/<lingua>.json` (`it`, `en`, `ru`, `az`, `sq`) |
| Telefono, email, WhatsApp, partita IVA, indirizzo di Baku | `src/content/site.ts` |
| Numeri in evidenza (anni, manifatture, categorie, sedi) | `src/content/site.ts` → `stats` |
| Marchi partner | `src/content/site.ts` → `partnerGroups` |
| Foto | `src/assets/photos/` (stessi nomi di file, vedi `CREDITS.md`) |
| Colori e stile | `src/app/globals.css` (variabili in cima al file) |

I cinque file di lingua devono avere le stesse voci: se ne manca una, il controllo dei tipi (`npm run typecheck`) lo segnala.

## Prima di andare online

Il sito è ancora un'**anteprima** (`draft: true` in `src/content/site.ts`): mostra la striscia "Anteprima del nuovo sito" in alto, l'etichetta "Esempio" sui progetti e la nota sotto la citazione.

- [ ] Sostituire le foto di esempio con foto vere dei progetti
- [ ] Confermare i numeri (gli "anni di esperienza" sono provvisori)
- [ ] Sostituire i quattro progetti di esempio con progetti reali (testi nei file di lingua, foto in `src/assets/photos/`)
- [ ] Scrivere e far approvare a Damiano la citazione, e aggiungere il suo ritratto
- [ ] Far rileggere russo, azero e albanese da madrelingua
- [ ] Pubblicare l'informativa privacy e la cookie policy (obbligatorie: il modulo contatti raccoglie dati personali) e collegarle nel piè di pagina e nella casella del modulo
- [ ] Configurare l'invio email del modulo (vedi sotto)
- [ ] Mettere `draft: false` in `src/content/site.ts`
- [ ] Collegare il dominio operatrade.it al progetto Vercel

## Modulo contatti

Il modulo invia le richieste per email tramite [Resend](https://resend.com). Nelle impostazioni del progetto su Vercel (*Settings → Environment Variables*) servono:

| Variabile | Esempio |
|---|---|
| `RESEND_API_KEY` | la chiave creata su Resend |
| `CONTACT_TO` | `info@operatrade.it` (più indirizzi separati da virgola) |
| `CONTACT_FROM` | `Opera Trade <sito@operatrade.it>` — il dominio va verificato su Resend |
| `NEXT_PUBLIC_SITE_URL` | `https://www.operatrade.it` (facoltativa, è già il valore predefinito) |

Finché la chiave non c'è, il modulo risponde "Invio non riuscito. Riprova o scrivici a info@operatrade.it", così nessuna richiesta va persa in silenzio.

## Lingue e indirizzi

Ogni lingua ha il suo indirizzo: `/it`, `/en`, `/ru`, `/az`, `/sq`. Chi apre `operatrade.it` viene mandato alla lingua del proprio browser; se non è una delle cinque, all'inglese (regole in `next.config.ts`). Sitemap e `robots.txt` sono generati in automatico.

## Per sviluppare

Serve Node.js 20.9 o successivo.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # controllo dei tipi
npm run lint
npm run build      # build di produzione, come su Vercel
```

## Pubblicazione su Vercel

1. Su [vercel.com](https://vercel.com) → *Add New → Project* → importare il repository `operatrade/sito`.
2. Lasciare le impostazioni proposte (Vercel riconosce Next.js da solo) e aggiungere le variabili del modulo contatti.
3. Ogni modifica su `main` viene pubblicata in automatico; ogni altro branch ottiene un indirizzo di anteprima.
4. Per il dominio: *Settings → Domains* → aggiungere `operatrade.it` e `www.operatrade.it` e seguire le istruzioni DNS presso il registrar attuale.
