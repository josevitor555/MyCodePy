export const cardsData = [
  {
    title: "Python Code 1",
    code: `# Questão 1

    items = [
        '1 - Cachorro Quante: R$ 4.00, Código 1',
        '2 - X Salada: R$ 4.50, Código 2',
        '3 - X Bacon: R$ 5.00, Código 3',
        '4 - Torrada Simples: R$ 2.00, Código 4',
        '5 - Refrigerante: R$ 1.50, Código 5'
    ]
    for i in items:
      print(i)
    
    codigo_Item = int(input('Informe o código do item: '))
    quantidade_Item = int(input('Informe a quantidade do item: '))
    
    match codigo_Item:
      case 1:
        total_Apagar = quantidade_Item * 4.00
        print(f'Total a pagar do item {codigo_Item}: R$ {round(total_Apagar, 2)}')
      case 2:
        total_Apagar = quantidade_Item * 4.50
        print(f'Total a pagar do item {codigo_Item}: R$ {round(total_Apagar, 2)}')
      case 3:
        total_Apagar = quantidade_Item * 5.00
        print(f'Total a pagar do item {codigo_Item}: R$ {round(total_Apagar, 2)}')
      case 4:
        total_Apagar = quantidade_Item * 2.00
        print(f'Total a pagar do item {codigo_Item}: R$ {round(total_Apagar, 2)}')
      case 5:
        total_Apagar = quantidade_Item * 1.50
        print(f'Total a pagar do item {codigo_Item}: R$ {round(total_Apagar, 2)}')
      case _:
        print('Código inválido!')`,
  },
  {
    title: "Python Code 2",
    code: `# Questão 2

    numero = float(input('Informe um número: '))
    
    match numero:
      case condicao1 if numero > 0:
        print(f'{numero} é maior que zero!')
      case condicao2 if numero < 0:
        print(f'{numero} é menor que zero!')
      case condicao3 if numero == 0:
        print(f'{numero} é neutro! Igual a zero.')`,
  }
];

export const sinopseData = {
  "Python Code 1": "Este código calcula o total a pagar com base nos itens selecionados e sua quantidade.",
  "Python Code 2": "Este código verifica se um número é positivo, negativo ou neutro."
};