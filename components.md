### Sobre o Seguidor de Linha

Robôs seguidores de linha são robôs programados para, através da leitura de sensores, detectar e seguir um caminho, normalmente feito com fita isolante, no formato de linhas.

Estes robôs são colocados a prova em competições entre acadêmicos, essas competições visam o melhor desenvolvimento desses robôs, colocando-os para disputar corridas em pistas criadas pelos organizadores das competições.

O circuito desenvolvido para o robô foi Simulado com o Thinkercard, ferramenta mantida gratuitamente pela Autodesk.

O circuito utiliza varios componentes eletrônicos, que juntos são capazes de seguir o percurso.

Dentre os componentes estão os seguintes:

## Fotorresistor

Um fotorresistor pode ser usado para a construção de sensores de luminosidade, controle de flashs de câmeras, alarmes, controle de lâmpadas, entre outros projetos que interagem com luz.

## Led RGB

O LED RGB tem a capacidade de exibir cores que são originadas a partir de três cores primárias.
Este componente possui três LEDs encapsulados em um mesmo dispositivo, onde cada LED representa uma cor distinta: vermelho, verde e azul.

## Resistor

Resistores são componentes eletrônicos cuja principal função é limitar o fluxo de cargas elétricas por meio da conversão da energia elétrica em energia térmica.
Os resistores são feitos a partir de materiais dielétricos.

## Motor CC

O motor de corrente contínua é uma máquina elétrica que transforma energia elétrica em energia mecânica.
O motor CC funciona a partir do princípio da atração e repulsão de campos eletromagnéticos.

## Acionador de motor de ponte H

O Acionador de motor de ponte H tem como principal função o controle de velocidade e sentido de motores DC, podendo também ser usado para controle da saída de um gerador DC ou como inversor monofásico.

## Protoboard

Uma protoboard é uma placa com furos e conexões elétricas ultilizada para a montagem de protótipos e projetos em estado inicial.

## Bateria 9V

Uma bateria é um dispositivo que transforma em corrente elétrica a energia desenvolvida em reações químicas. Cada célula de uma bateria contém um terminal positivo e um terminal negativo .

## Arduíno

Arduino é uma placa de desenvolvimento open source, cuja função é tornar pequenos projetos possíveis.
Possui incorporado na placa um microcontrolador, que é programado com a linguagem C++, entradas digitais e analógicas, saídas digitais e saídas PWM que permitem o controle de atuadores e a leitura de sensores.

### Programa

O programa feito em C++ para controle do robô nesta fase inicial, consiste de um algoritmo que lê os sensores, e retorna um comando, podendo esse comando ser:
Mover para a frente
Mover para a direita
Mover para trás

Inicialmente, com os defines, são definidos os pinos do arduino, para serem utilizados no código.

No void setup() temos as configurações dos pinos, e da porta serial utilizada para debug do programa;

O void loop(), inicialmente lê o valor dos sensores, e então imprime na porta serial;

Após ler as entradas analógicas, o software então toma a decisão entre os 4 possiveis comandos (Frente, direita, esquerda, parado), buscando se manter sempre sobre a "linha";

```C++
// MOTOR
#define IN1 2
#define ENA 3
#define IN2 4
#define IN3 5
#define ENB 6
#define IN4 7

// LED RGB
#define LEDG 9
#define LEDB 10
#define LEDR 11

// SENSOR
#define S1 A0
#define S2 A1
#define S3 A2
#define S4 A3

void setup()
{
  // MOTOR
  pinMode(IN1,OUTPUT);
  pinMode(IN2,OUTPUT);
  pinMode(IN3,OUTPUT);
  pinMode(IN4,OUTPUT);
  pinMode(ENA,OUTPUT);
  pinMode(ENB,OUTPUT);
  analogWrite(ENA,255);
  analogWrite(ENB,255);

  // LED RGB
  pinMode(LEDR, OUTPUT);
  pinMode(LEDB, OUTPUT);
  pinMode(LEDG, OUTPUT);

  Serial.begin(9600);
}

void loop()
{
  // Leitura dos sensores
  int s1, s2, s3, s4;

  s1=analogRead(S1);
  s2=analogRead(S2);
  s3=analogRead(S3);
  s4=analogRead(S4);

  int luz = 500;

  Serial.print(s1);
  Serial.print(" ");
  Serial.print(s2);
  Serial.print(" ");
  Serial.print(s3);
  Serial.print(" ");
  Serial.print(s4);
  Serial.print(" ");

  if(s1<luz && s2>luz && s3>luz && s4<luz){
    //frente
    Serial.println(" Frente ");

    digitalWrite(LEDR, LOW);
    digitalWrite(LEDG, HIGH);
    digitalWrite(LEDB, LOW);

    digitalWrite(IN1,HIGH);
  	digitalWrite(IN2,LOW);
  	digitalWrite(IN3,LOW);
  	digitalWrite(IN4,HIGH);
  }else if (s1>luz && s2<luz && s3<luz && s4<luz){
    // direita
    Serial.println(" Direita ");

    digitalWrite(LEDR, HIGH);
    digitalWrite(LEDG, LOW);
    digitalWrite(LEDB, LOW);

    digitalWrite(IN1,LOW);
    digitalWrite(IN2,HIGH);
    digitalWrite(IN3,LOW);
    digitalWrite(IN4,HIGH);
  }else if (s1<luz && s2<luz && s3<luz && s4>luz){
    // esquerda
    Serial.println(" Esquerda ");

    digitalWrite(LEDR, HIGH);
    digitalWrite(LEDG, LOW);
    digitalWrite(LEDB, LOW);

    digitalWrite(IN1,HIGH);
    digitalWrite(IN2,LOW);
    digitalWrite(IN3,HIGH);
    digitalWrite(IN4,LOW);
  }else{
    // desligado
    Serial.println(" Parado ");

    digitalWrite(LEDR, LOW);
    digitalWrite(LEDG, LOW);
    digitalWrite(LEDB, HIGH);


    digitalWrite(IN1,LOW);
    digitalWrite(IN2,LOW);
    digitalWrite(IN3,LOW);
    digitalWrite(IN4,LOW);
  }
}

```
