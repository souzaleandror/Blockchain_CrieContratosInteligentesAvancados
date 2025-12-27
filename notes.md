27/12/2025

Curso de Blockchain: crie contratos inteligentes avançados

@01
Conceitos intermediários de Blockchain

@@01
Apresentação

Você quer começar a escrever contratos inteligentes mais avançados, com funcionalidades mais sofisticadas, trabalhando no ecossistema das blockchains?
Meu nome é Vinícius Chagas e serei seu instrutor ao longo deste curso sobre blockchains! Eu sou fundador e CEO da HOUS3, uma fábrica de software focada na nova economia digital, e te dou boas-vindas diretamente do estúdio da Alura, preparado especialmente para esta jornada.

Audiodescrição: Vinícius se descreve como um homem de cabelo encaracolado castanho-escuro, barba média castanho-escura, e olhos castanho-escuros. Ele usa óculos de armação arredondada prateada, veste uma camisa preta, e está no estúdio da Alura, com um microfone preto à sua frente e uma parede clara ao fundo iluminada em degradê verde.
Para quem é este curso?
Este material foi preparado para quem trabalha com desenvolvimento e tem interesse em participar do ecossistema de blockchain, trabalhando com smart contracts, ou contratos inteligentes.

Quais são os requisitos?
Para isso, é importante possuir conhecimento básico prévio em Solidity. Além disso, para a parte prática, será necessário conhecimento prévio em Node e Next.js.

O que vamos aprender?
Ao longo deste curso, aprenderemos como funciona a criptografia na blockchain na prática. Também entenderemos o que são e como funcionam os protocolos de consenso.

Além disso, exploraremos as soluções de segunda camada e as soluções de escalabilidade na blockchain; entenderemos o que é Oracle e como integrar soluções de oráculos em smart contracts. Por fim, abordaremos padrões mais avançados de construção com contratos inteligentes.

Consolidaremos todos esses conhecimentos em um projeto prático de crowdfunding, onde construiremos uma aplicação com um front-end integrado à blockchain.

Essa aplicação incluirá um painel administrativo para criar campanhas de crowdfunding, contribuir para elas, solicitar saques e, como pessoas administradoras, aprovar e executar esses saques. Assim, distribuiremos o dinheiro recebido durante as doações para a campanha de crowdfunding.

Conclusão
Lembre-se de aproveitar todos os conteúdos da plataforma que estarão à sua disposição. Além dos vídeos, temos atividades práticas, um fórum, e uma comunidade no Discord.
Vamos começar a estudar? Te aguardamos no próximo vídeo!

@@02
A Plataforma Ethereum

Como vimos no curso anterior, tivemos duas fases da blockchain. A primeira fase, com o Bitcoin, tinha um propósito específico, focado no problema das transações financeiras. Já o Ethereum surgiu como um computador descentralizado, que podemos utilizar para escrever programas.
Bitcoin:
Limitada a transações financeiras
Limitada para aplicações complexas
Ethereum:
Computador descentralizado global
Aplicações descentralizadas
Agora, vamos nos aprofundar nessa transição. Com o Bitcoin, enfrentamos um grande problema: não conseguimos utilizar aquela blockchain para escrever aplicações mais complexas devido a suas limitações. A partir de 2015, com o Ethereum, temos um computador descentralizado global, que possui uma máquina virtual, permitindo-nos escrever nossos programas, as chamadas "aplicações descentralizadas".

Como construir aplicações mais complexas?
Chegamos à questão de como construir aplicações mais complexas que vão além de transações financeiras. Por exemplo, um jogo que utiliza blockchain para alguma regra de negócio, um sorteio, e aplicações financeiras como empréstimos e liquidações.

A grande diferença entre a blockchain de primeira geração, como o Bitcoin, e as blockchains de segunda geração, que tiveram origem no Ethereum, é a presença de um componente chamado Ethereum Virtual Machine.

Ethereum Virtual Machine, basicamente, é uma máquina virtual que nos permite escrever contratos inteligentes. Esses contratos são programas que escrevemos e enviamos para a blockchain, sendo executados a cada transação que faz uma requisição para aquele contrato.

O Ethereum surge com a visão de ser o computador global. Seu fundador, Vitalik Buterin, o apresenta como um canivete suíço. Enquanto o Bitcoin tinha uma finalidade específica de transações financeiras, o Ethereum oferece várias ferramentas para escrevermos nossas aplicações descentralizadas na blockchain, utilizando contratos inteligentes.

Um exemplo simples de contrato inteligente é uma lógica que, uma vez escrita e enviada para a blockchain, será executada quando as condições pré-determinadas forem validadas.

Imagine um contrato inteligente na blockchain para um aluguel.

Exemplo de contrato inteligente:
O inquilino envia o pagamento;
O contrato verifica o valor depositado;
Contrato transfere o pagamento para proprietário.
Quando o inquilino deposita o dinheiro, o contrato identifica o depósito e pode, por exemplo, liberar o acesso ao imóvel, tudo sem a intervenção de terceiros. Essa autoexecução dos contratos inteligentes é o grande ganho das aplicações descentralizadas.

Quais são essas aplicações descentralizadas mais complexas que queremos escrever com as blockchains 2.0?
Imagine que temos um ecossistema de contratos inteligentes que gerenciam empréstimos financeiros. De um lado, temos os provedores de liquidez que colocam quantias financeiras e, do outro, os tomadores que aceitam pagar juros.

Essa relação, que no ambiente tradicional é gerenciada por bancos e financiadoras, no ecossistema descentralizado do DeFi (finanças descentralizadas), é gerenciada por contratos inteligentes. Isso não seria possível nas blockchains de primeira geração.

Outro exemplo são os NFTs, tokens que criam a representação da propriedade digital de algo único. Podemos ter aplicações que utilizam NFTs para ingressos com assentos numerados, acesso a cursos, plataformas online ou certificados digitais. Os NFTs são exemplos de aplicações que não seriam possíveis na blockchain 1.0.

Por fim, as DAOs(Organizações Autônomas Descentralizadas), surgiram com a blockchain. Basicamente, são contratos inteligentes que podem gerenciar a gestão de projetos.

Esses ecossistemas que citei como exemplos, gerenciados por contratos inteligentes com blockchain, são muito mais complexos do que simples transações financeiras.

Conclusão
Neste vídeo, aprendemos sobre a importância do Ethereum ao trazer programabilidade para a blockchain.

No próximo vídeo, vamos nos aprofundar no componente que possibilita isso: a máquina virtual!

@@03
Para saber mais: diferenças entre Ethereum e outras Blockchains
 PRÓXIMA ATIVIDADE

O Ethereum se destaca no universo blockchain por sua flexibilidade e capacidade de executar contratos inteligentes e aplicações descentralizadas (dApps). Diferentemente de blockchains como o Bitcoin, que se concentra exclusivamente em transações financeiras, o Ethereum permite criar soluções inovadoras que vão desde jogos até sistemas financeiros complexos.
Por exemplo: enquanto outras blockchains podem ser projetadas para propósitos específicos, o Ethereum funciona como uma plataforma programável, oferecendo ferramentas para desenvolvedores personalizarem e automatizarem suas próprias aplicações descentralizadas.

Entender essas diferenças ajuda a explorar melhor os casos de uso e as vantagens do Ethereum em comparação com outras tecnologias.

Para se aprofundar mais, convido você a ler o artigo oficial do Ethereum:: O que é Ethereum?
Este artigo oferece uma introdução detalhada ao Ethereum, explicando seus fundamentos, objetivos e como ele se diferencia de outras blockchains.

@@04
Máquina Virtual Ethereum (EVM)

No vídeo anterior, entendemos o grande avanço que tivemos da blockchain 1.0 para a blockchain 2.0. Agora, vamos falar sobre o componente que traz essa evolução: a máquina virtual do Ethereum.
Quando falamos em executar um software dentro de um ambiente descentralizado, onde não temos 100% de controle, precisamos garantir que todos esses softwares sejam executados da mesma maneira e atinjam sempre os mesmos resultados. Caso contrário, teríamos um problema de incompatibilidade.

A solução para isso na blockchain é a máquina virtual Ethereum(EVM). As blockchains que possuem esse componente são chamadas de EVMs, e ele é responsável por garantir essa uniformidade. A EVM funciona como um processador mas é um processador virtualizado, não é um processador em hardware.

Esse conceito é comum em outras linguagens de programação. Existe, por exemplo, a Java Virtual Machine, que virtualiza o ambiente e garante a execução uniforme dos componentes, independentemente do sistema operacional.

Isso é crucial para a blockchain, pois, mesmo em um ambiente descentralizado, onde qualquer pessoa, de qualquer lugar do mundo, pode rodar um nó e participar da rede, conseguimos garantir que a execução dos programas será sempre idêntica e chegará ao mesmo resultado.

Máquina virtual
A máquina virtual precisa interpretar algo, mas ela não interpreta diretamente o código escrito em Solidity, a linguagem de programação usada para contratos inteligentes.

Compilamos o contrato inteligente em Solidity para bytecode, que será interpretado pela máquina virtual. É importante compreender como o software que escrevemos é transformado em bytecode, que será interpretado e executado pela máquina virtual dentro da infraestrutura da blockchain.

A nossa máquina virtual possui características diferentes de uma máquina virtual tradicional. Precisamos de isolamento e imutabilidade. Na blockchain, quando subimos um dado ou contrato, eles são imutáveis. O código não pode ser alterado, embora possamos fazer atualizações, tema que será tratado mais adiante no curso. Quando subimos um contrato, aquela versão é imutável.

Outro ponto importante é o gas(unidade de medida), que é o custo ou taxa paga para que os contratos sejam executados. Em um ambiente descentralizado, precisamos controlar os recursos computacionais utilizados na execução.

Se os servidores estivessem abertos para qualquer um submeter um programa, a tendência seria que agentes tentassem consumir mais recursos, esgotando-os e impedindo o funcionamento da blockchain. O gas atua como limitador, cobrando mais caro por transações que consumam muitos recursos.

Contrato EVM
O ciclo de vida do contrato envolve escrevê-lo localmente, compilá-lo, implantá-lo na blockchain e, através de transações, interagir com suas funções e variáveis.

Escrita de contrato
Compilação
Implantação
Execução
A EVM, o cérebro da blockchain, possui componentes principais:

Armazenamento: equivalente ao disco rígido, armazena permanentemente as variáveis de estado dos contratos e outros dados na blockchain.
Memória: é como se fosse uma memória RAM, é volátil e limpa a cada execução de contrato.
Pilha de dados(stack): gerencia as operações em uma estrutura de pilha.
Código: o bytecode do software é imputado na EVM durante a execução.
Args (Argumentos): parâmetros de funções ou metadados de transações são imputados na execução.
A EVM funciona como o processador da blockchain, permitindo a escrita de programas através de contratos inteligentes.

Opcodes
Vamos agora explorar os opcodes, comandos que a EVM entende e executa. No site EVM Codes, encontramos uma lista de todos os opcodes.

Esses comandos são colocados na pilha, retirados e executados, resultando na dinâmica da execução. Não é necessário decorar esses comandos, mas é importante entender que o código escrito é transformado em bytecode, que contém os opcodes.

Os opcodes têm impacto muito grande, especialmente no versionamento da máquina virtual. A versão do compilador pode alterar opcodes, exigindo atenção ao escrever contratos em novas versões. A compatibilidade entre blockchains diferentes também é afetada, pois opcodes diferentes significam que uma máquina virtual não será compatível com outra.

Próximo passo
Neste vídeo, entendemos como a blockchain permite a escrita de programas complexos e como o software em linguagem de alto nível chega à máquina virtual.

No próximo vídeo, abordaremos um dos principais componentes da blockchain: a criptografia. Veremos na prática como funcionam os principais componentes de criptografia dentro de uma blockchain!

@@05
Implementando contratos inteligentes para gestão de direitos autorais na Screen Match
 PRÓXIMA ATIVIDADE

A Screen Match, uma plataforma de streaming de vídeos, está buscando maneiras de proteger os direitos autorais dos criadores de conteúdo que utilizam sua plataforma. A equipe de desenvolvimento, da qual você faz parte, foi encarregada de explorar o uso de contratos inteligentes na blockchain Ethereum para automatizar a gestão de direitos autorais e garantir que os criadores recebam pagamentos justos e automáticos por suas obras.
Como os contratos inteligentes podem ser utilizados para gerenciar os direitos autorais de forma eficiente e segura na plataforma Screen Match?

Selecione uma alternativa

Os contratos inteligentes podem ser utilizados na Screen Match para permitir que qualquer pessoa usuária edite as condições de uso e pagamento dos vídeos, promovendo flexibilidade e personalização para cada transação. Isso incluiria a possibilidade de ajustar as taxas de pagamento e os termos de licenciamento, permitindo uma abordagem mais dinâmica e adaptável às necessidades individuais dos usuários e criadores de conteúdo.
 
Os contratos inteligentes podem ser utilizados na Screen Match para criar um sistema de gestão de direitos autorais que exige a aprovação manual de cada transação por uma equipe de revisão, garantindo que os criadores recebam pagamentos apenas após a verificação humana. Além disso, esse sistema pode incluir auditorias periódicas para assegurar a conformidade com as políticas internas e externas, promovendo uma camada adicional de segurança e controle sobre as transações realizadas na plataforma.
 
Os contratos inteligentes podem ser utilizados na Screen Match para criar um sistema automatizado de gestão de direitos autorais. Cada vídeo carregado na plataforma pode ser associado a um contrato inteligente que define as condições de uso e pagamento. Quando uma pessoa usuária assiste a um vídeo, o contrato inteligente pode automaticamente calcular e transferir a quantia devida ao criador do conteúdo, sem a necessidade de intermediários. Isso garante que os pagamentos sejam feitos de forma justa e transparente, além de proteger os direitos autorais, pois todas as transações são registradas de forma imutável na blockchain.
 
Os contratos inteligentes podem ser utilizados na Screen Match para armazenar apenas os dados pessoais dos criadores de conteúdo, enquanto as transações financeiras são geridas por um sistema externo tradicional. Este sistema externo poderia ser integrado com bancos e instituições financeiras para processar pagamentos, mantendo um registro separado das transações financeiras e dos dados pessoais para maior segurança e privacidade.

@@06
Criptografia na Blockchain

Nesse vídeo, vamos aprender sobre um dos conceitos mais importantes da blockchain na prática: a criptografia. Utilizaremos o Node.js para nos ajudar a entender esse conceito.
Criptografia na blockchain
Quando falamos de blockchain, estamos nos referindo a um ambiente descentralizado onde dados e informações são trocados por pessoas sem identificação, como RG, e-mail ou senha. Isso ocorre com a criptografia sendo utilizada como ferramenta.

A criptografia é a ferramenta que utilizamos para que um interceptador não consiga conhecer nossa mensagem.
Na blockchain, ela é utilizada de duas formas principais para garantir transações de modo seguro.

Como esse sistema garante que as informações colocadas são imutáveis e que as vontades dos donos, como o dono de um criptoativo ou token, sejam respeitadas? Ou seja, que o token só seja transferido quando o dono principal assim o fizer? A criptografia é fundamental nesse ambiente descentralizado, onde qualquer um pode enviar uma transação.

Na blockchain, a criptografia é utilizada constantemente de duas formas: funções hash e assinatura digital. A conta na blockchain não é com e-mail e senha. No curso passado, entendemos que a wallet tem um par de chaves criptográficas que servem nesse processo.

Função hash
A primeira utilização, a função hash, serve tanto para a compactação de dados quanto para a validação de que os dados não foram alterados.

Quando utilizamos a função hash para gerar o hash de um dado (ou seja, o resultado da função), temos a certeza de que, se algo mudar no input, o resultado será completamente diferente. Também sabemos que, com o mesmo resultado, temos o mesmo input.

Essas são as características da função hash:

unidirecional: conseguimos chegar a um output a partir do input, mas não o contrário;
determinística: a mesma entrada sempre gera a mesma saída, garantindo a imutabilidade;
sensível a alterações: pequenas mudanças na entrada resultam em hashes completamente diferentes.
Assinatura digital
A segunda utilização é a assinatura digital. Com o par criptográfico de chave pública e privada das wallets, assinamos as transações e as enviamos para a blockchain.

Quando a rede recebe essa transação, consegue verificar, através da criptografia, se quem enviou a transação é o dono daquele ativo.

Módulo crypto do Node.js
Vamos agora para a tela fazer um exemplo desses conceitos onde utilizamos a criptorgrafia com o Node.js.

Primeiramente, importaremos o módulo crypto do Node, um módulo nativo, pois estamos falando de criptografia real, e não um conceito inventado pela blockchain.

criptografia.js:
const crypto = require('crypto');
COPIAR CÓDIGO
Gerando par de chaves
A partir do módulo crypto, utilizaremos a função generateKeyPairSync(). Na constante atribuída, vamos desestruturar o objeto de retorno para pegar a chave pública (publicKey) e privada (privateKey).

Na função, devemos passar alguns parâmetros, como o algoritmo de criptografia. Dentre as várias implementações, vamos utilizar a curva elíptica, a mesma do Bitcoin e das principais blockchains.

const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', {
  namedCurve: 'secp256k1', 
});
COPIAR CÓDIGO
Essa implementação é um exemplo para entender como funciona o processo. Você, provavelmente não vai utilizá-la no seu dia a dia.

Criando a mensagem
Agora, vamos criar uma mensagem qualquer, que poderia ser nossa transação, e a logamos no terminal.

const message = 'Aula 1, vídeo 1.4';
console.log("\nMensagem original:", message);
COPIAR CÓDIGO
No terminal, podemos executar o comando node criptografia.js para exibir a mensagem original:

Mensagem original: Aula 1, vídeo 1.4
Criando um hash da mensagem
Em seguida, vamos criar uma constante hash e utilizar o módulo crypto para criar um hash através da função createHash(). Passamos o algoritmo sha256, um dos mais utilizados, inclusive na blockchain.

Assinamos a mensagem, com update(message), e pegamos o digest(), que é o conteúdo da mensagem criptografada.

Por fim, logamos o hash da mensagem. Para que o terminal consiga interpretá-lo, precisamos convertê-lo de hexadecimal para string.

const hash = crypto.createHash('sha256').update(message).digest();
console.log("\nHash da mensagem:", hash.toString('hex'), "\n");
COPIAR CÓDIGO
Mensagem original: Aula 1, vídeo 1.4
Hash da mensagem 8c4965c4e567ead060baaf1f7e429563c0178d999869f4124b5ac5bde5b2b7f7

No terminal, exibimos tanto a mensagem original quanto o hash da mensagem, cujo formato é padronizado.

Para demonstrar a sensibilidade a alterações, vamos mudar um caractere da mensagem, acrescentando um espaço a mais no final da string.

Mensagem original: Aula 1, vídeo 1.4(espaço)
Hash da mensagem d98f43a5aa9c63c12e2c1dac533343ebc35456fc5a6c0ecd942324a023a3e611

Ao executar o arquivo criptografia.js novamente, o hash da mensagem é completamente diferente.

Além disso, se voltarmos para a mensagem anterior, voltaremos para o resultado original. Com isso, demonstramos a característica determinística: a mesma entrada sempre gera o mesmo resultado.

Assinando o hash
O segundo ponto que traz segurança na blockchain é parte da assinatura. Para exemplificá-la, também vamos utilizar o módulo crypto do Node, mas com a função sign().

Assim, vamos assinar, utilizando sha256, a variável hash (que é o output da utilização do hash para criptografar a mensagem) com a chave privada, que nomeamos como privateKey. Esse é o processo que as wallets fazem para enviar transações para a blockchain.

Por último, logamos a assinatura e a convertemos de hexadecimal para string.

const signature = crypto.sign('sha256', hash, privateKey);
console.log("Assinatura:", signature.toString('hex'), "\n");
COPIAR CÓDIGO
Assinatura: 3045022100804c63088c96b63899fd781fd739f3cbdf0c6bb650ee5364b601eda 315dbda7b022077c3b3ca3f5b29ef4600144c6ba4d9ce9493de6f4a47772d387368460d169f20
Com isso, exibimos a assinatura no terminal em seu formato padrão. Basicamente, utilizamos a criptografia para informar o par criptográfico que está mandando essa mensagem. Desse modo, só o dono com a chave privada consegue assinar uma transação.

Verificando a assinatura
Também podemos usar a criptografia para verificar, através da função crypto.verify(), se a mensagem foi assinada por alguém. Na função verify(), não temos acesso a chave privada. Por isso, fazemos isso passando o sha256, o hash, a chave pública e a assinatura.

Com isso, logamos se a assinatura é válida por meio do isValid.

const isValid = crypto.verify('sha256', hash, publicKey, signature);
console.log('Assinatura válida?', isValid);
COPIAR CÓDIGO
Assinatura válida? true
Quando executamos, verificamos que o objeto possui realmente uma assinatura válida.

Se alterarmos a chave pública para uma diferente do par criptográfico, a verificação falharia. Assim, é possível garantir que a transação foi enviada pela pessoa que a assinou com sua chave privada. Esse processo de criptografia gerencia bilhões de dólares na blockchain.

Próximos passos
Entendemos como a criptografia funciona na prática, utilizando os fundamentos de criptografia no Node. Esses conceitos são essenciais para a blockchain.

Na próxima aula, falaremos sobre protocolos de consenso, fundamentais para o funcionamento da blockchain. Também utilizaremos o Node para conhecer os dois principais: prova de trabalho e prova de participação. Te esperamos lá.

@@07
Faça como eu fiz: módulo crypto do Node.js para entender a criptografia da Blockchain
 PRÓXIMA ATIVIDADE

Neste vídeo, criamos um projeto prático em Node.js para explorar conceitos fundamentais de criptografia no contexto blockchain:
Utilizamos o módulo crypto do Node.js para implementar funções de hash (SHA-256) e gerar assinaturas digitais.
Geramos uma chave pública e uma chave privada para autenticar transações, demonstrando como assinaturas digitais garantem integridade e autenticidade.
Aplicamos funções de hash para entender como esses algoritmos transformam dados em representações únicas e irreversíveis.
Agora é sua vez! Experimente recriar esse passo a passo para consolidar os conceitos de criptografia aplicados à blockchain.

Lembre-se de que, se tiver dúvidas, você sempre pode acessar novamente os materiais da aula, consultar a documentação oficial ou tirar dúvidas com a comunidade no fórum e no Discord. Bons estudos!

Para recriar o exemplo prático, siga os passos abaixo:
Configuração: Certifique-se que o Node.js está instalado, crie um projeto com npm init -y e instale o módulo crypto
Implementação de Hashes: Use o método crypto.createHash() para gerar hashes (SHA-256).
Chaves Públicas e Privadas: Utilize o método crypto.generateKeyPairSync() para criar pares de chaves.
Assinaturas Digitais: Assine mensagens com crypto.sign() e valide-as com crypto.verify().
Execute o código no terminal para verificar os resultados. Esse exercício reforça os conceitos fundamentais de criptografia no contexto blockchain.

@@08
Consistência de execução de transações no SwiftBank
 PRÓXIMA ATIVIDADE

O SwiftBank, um aplicativo de banco digital que oferece serviços financeiros completos, como abertura de conta, pagamentos e transferências, está expandindo suas operações para novos mercados internacionais. Isso traz o desafio de garantir que as transações financeiras sejam processadas de forma consistente em diferentes jurisdições e infraestruturas tecnológicas.
Considerando o papel da Ethereum Virtual Machine em garantir a execução consistente de programas em um ambiente descentralizado, qual abordagem poderia ser aplicada para assegurar que as transações no SwiftBank sejam processadas de maneira consistente em todos os mercados?

Desenvolver um sistema de transações descentralizado que permita que cada mercado internacional adapte as transações às suas infraestruturas locais, sem a necessidade de um formato padronizado, mas com a inclusão de protocolos de segurança que garantam a integridade dos dados e a proteção contra fraudes.
 
Alternativa incorreta
Criar um sistema de transações centralizado que dependa de servidores locais em cada mercado para processar transações, garantindo que cada jurisdição siga suas próprias regras e infraestruturas, mas com auditorias regulares para assegurar a conformidade com os padrões globais.
 
Alternativa incorreta
Implementar um sistema de execução padronizado, inspirado na Ethereum Virtual Machine, que utiliza um formato de transação intermediário interpretado por um ambiente virtual padronizado, garantindo processamento idêntico das transações, independentemente das infraestruturas locais.
 
Correta, pois essa abordagem assegura que as transações sejam processadas de forma consistente em diferentes jurisdições, utilizando um ambiente virtual padronizado que interpreta um formato de transação intermediário, além de incluir mecanismos de verificação e validação para segurança e conformidade.
Alternativa incorreta
Utilizar um sistema de execução baseado em contratos inteligentes que são personalizados para cada mercado, permitindo flexibilidade nas transações de acordo com as infraestruturas locais, mas com a implementação de um protocolo de sincronização para alinhar as operações globais.

@@09
O que aprendemos?
 PRÓXIMA ATIVIDADE

Nesta aula, aprendemos:
A evolução da blockchain do Bitcoin ao Ethereum e a introdução dos contratos inteligentes.
O papel da Ethereum Virtual Machine na execução de contratos inteligentes.
A transformação do código em Solidity para bytecode interpretado pela EVM.
A importância do gas para a execução de contratos em um ambiente descentralizado.
A utilização de funções hash e suas características de segurança.
O processo de criação e verificação de assinaturas digitais.
Como a criptografia assegura a autorização de transações na blockchain.