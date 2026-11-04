# Sniper Ofertas — página técnica

Página estática pública, separada do repositório privado do robô, para fornecer
um endereço HTTPS sob controle do projeto no cadastro de integrações.

Endereço previsto após a publicação:
https://therushmode.github.io/sniper-ofertas-callback/

## Limites

- Não é um backend OAuth e não conclui autorização de contas de vendedores.
- A aceitação do endereço no cadastro do AliExpress deve ser conferida no portal.
- `aliexpress.affiliate.link.generate` e `aliexpress.affiliate.product.query`
  são documentados como APIs que não exigem autorização de usuário; continuam
  exigindo as credenciais e a assinatura do aplicativo.
- As credenciais e o código do bot não pertencem a este repositório.
- A página não usa analytics, cookies, localStorage, formulários ou serviços externos.
- Parâmetros de query/fragmento são removidos da barra de endereço quando o
  JavaScript está disponível. Seus valores não são exibidos nem processados.
  A requisição inicial já chegou ao GitHub; essa limpeza não remove registros
  operacionais do provedor de hospedagem.
- Se OAuth passar a ser necessário, implementar o fluxo apropriado antes de usá-lo.

## Publicação

GitHub Pages, branch `main`, diretório `/`, com HTTPS obrigatório.
O repositório público contém somente esta página e a logo do projeto.

## Referências

- https://developer.alibaba.com/docs/api.htm?apiId=45804
- https://developer.alibaba.com/docs/api.htm?apiId=45803
- https://developer.alibaba.com/docs/doc.htm?articleId=120687&docType=1&treeId=727
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
