#Recuperação de senha

  **RF**

  - O usuário deve poder recuperar sua senha informando o seu e-mail;
  - O usuário deve receber um e-mail com instruções de recuperação de senha;
  - O usuário deve poder resetar sua senha;

  **RNF**

  - Usar o Mailtrap para testar envios em ambiente de dev;
  - Utilizar Amazon SES para envios em produção;
  - O envio de e-mails deve acontecer em segundo plano (background job);

  **RN**

  - O link enviado por email para registrar senha, deve expirar em 2h;
  - O usuário precisa confirmar a nova senha ao resetar a senha;

#Atualização do perfil

  **RF**

  - O usuário deve poder atualizar seu nome, email e senha;

  **RN**

  - O usuário não pode alterar seu email para um email ja utilizado;
  - Para atualizar sua senha, o usuário deve informar a senha antiga;
  - Para atualizar sua senha, o usuário precisa confirmar a nova senha;

#Painel do prestador

  **RF**

  - O usuário deve poder listar seus agendamentos de um dia específico;
  - O prestador deve receber uma notificação sempre que houver um novo agendamento;
  - O prestador deve poder visualizar as notificações não lidas;

  **RNF**

  - Os agendamentos do prestador do dia devem ser armazenadas em cache;
  - As notificações do prestador devem ser armazenadas no MongoDB;
  - As notificações do prestador dever ser eviadas em tempo real utilizando socket.io;

  **RN**

  - A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


#Agendamento de serviços

  **RF**

  - O usuário deve poder listar todos prestadores de serviço cadastrados;
  - O usuário deve poder listar os dias de um mês com pelo menos um horário disponível;
  - O usuário deve poder listar horários disponíveis em um dia especifico de um prestador;
  - O usuário deve poder realizar um nova agendamento com um prestador;

  **RNF**

  - A listagem de prestadores deve ser armazenada em cache;

  **RN**

  - Cada agendamento deve durar 1h exatamente;
  - Os agendamentos deve estar disponíveis entre 8h00 as 17h00;
  - O usuário não pode agendar em um horário já ocupado;
  - O usuário não pode agendar em um horário que já passou;
  - O usuário não pode agendar um serviço pra ele mesmo;
