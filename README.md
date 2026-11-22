# M-P-A Wi-Fi — Starter

Huu ni mwanzo wa muonekano wa PWA na schema ya Supabase, si mfumo wa malipo/live hotspot uliokamilika.

## Vilivyomo
- Dashboard ya mwanzo
- Vifurushi: Saa 1 TSh 500; Siku 1 TSh 1,000; Wiki 1 TSh 5,000; Mwezi 1 TSh 10,000
- Muonekano wa FREE ACCESS kwa Admin/wafanyakazi
- Ukurasa wa mfano wa kuchagua njia ya malipo
- PWA shell
- Supabase SQL schema ya kuanzia

## Muhimu kabla ya kutumia kwa wateja
1. Chagua na fungua akaunti ya Payment Gateway inayokubali mitandao minne; pata API credentials na webhook.
2. Unganisha Supabase project, Auth, RLS policies na server-side Edge Functions.
3. Chagua hotspot controller yenye API ya ku-authenticate/de-authenticate wateja na kuweka session expiry. Router ya Halotel H153-381 peke yake haijathibitishwa kuwa na captive portal/voucher API; usitegemee ukurasa huu kuzuia internet mpaka controller iunganishwe.
4. Tekeleza uthibitishaji wa webhook kwa signature, transaction id ya kipekee, na idempotency ili malipo yasihesabiwe mara mbili.
5. Kwa kuongeza muda: new_start = greatest(now(), current_expiry); new_expiry = new_start + purchased_duration.
6. Admin FREE isiyo na expiry na staff FREE kulingana na ruhusa ya Admin lazima zithibitishwe server-side, si kwa JavaScript ya browser.

## Kuendesha kwa majaribio
Weka folda hii kwenye hosting inayotumia HTTPS au local development server. Fungua `index.html`. PWA service worker inahitaji localhost au HTTPS.
