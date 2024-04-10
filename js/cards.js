const cardsData = [
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
  },
  {
    title: "Python Code 3",
    code: `# Questão 3

    numero1 = float(input('Informe o primeiro número: '))
    numero2 = float(input('Informe o segundo número: '))
    
    menor_numero = numero1, numero2
    
    match menor_numero:
      case condicao1 if numero1 < numero2:
        menor_numero = numero1
        print(f'Maior deles: {menor_numero}')
      case condicao2 if numero2 < numero1:
        menor_numero = numero2
        print(f'Menor deles: {menor_numero}')
      case _:
        print('São iguais!')`
  },
  {
    title: "Python Code 4",
    code: `# Questão 4

    preco1 = float(input('Informe o primeiro preço: '))
    preco2 = float(input('Informe o segundo preço: '))
    preco3 = float(input('Informe o terceiro preço: '))
    
    nao_DeveComprar = (preco1, preco2, preco3)
    
    match nao_DeveComprar:
      case (preco1, preco2, preco3) if preco1 > preco2 and preco1 > preco3:
        nao_DeveComprar = preco1
        print(f'Não deve comprar: R$ {round(nao_DeveComprar, 2)}')
      case (preco1, preco2, preco3) if preco2 > preco1 and preco2 > preco3:
        nao_DeveComprar = preco2
        print(f'Não deve comprar: R$ {round(nao_DeveComprar, 2)}')
      case (preco1, preco2, preco3) if preco3 > preco1 and preco3 > preco2:
        nao_DeveComprar = preco3
        print(f'Não deve comprar: R$ {round(nao_DeveComprar, 2)}')`
  },
  {
    title: "Python Code 5",
    code: `# Questão 5

    industria = 'The Industry of Life LTDA'
    
    indice = 0.5
    notificacao = indice
    
    if notificacao >= 0.3 and notificacao <= 0.4:
      print('Reduz a emisão de poluição!')
    else:
      print('Suspenda suas atividades!')`
  },
  {
    title: "Python Code 6",
    code: `# Questão 6

    nome_Trabalhador = str(input('Informe o nome do trabalhador: '))
    horasTrabalhadas = float(input('Informe o número de horas trabalhadas: '))
    
    valor_horasNormal = 100.00
    valor_HorasExtras = 150.00
    
    # salario_Base é se não exceder as horas trabalhadas
    
    salario_Base = valor_horasNormal * valor_HorasExtras
    
    if horasTrabalhadas > 44:
      valor_HorasExtras = horasTrabalhadas - 44
      salario_Extra = valor_HorasExtras * valor_HorasExtras
    else:
      valor_HorasExtras = 0 # Se não exceder as 44 horas
      salario_Extra = 0 # Se não exceder as 44 horas
    
    salarioTotal = salario_Base + salario_Extra # SalárioTotal é se caso exceder
    
    print(f"Nome do trabalhador: {nome_Trabalhador}")
    print(f"Valor pago de hora extra: R$ {round(salario_Extra, 2)}")
    print(f"Salário final: R$ {round(salarioTotal, 2)}")`
  },
  {
    title: "Python Code 7",
    code: `# Questão 7

    def verification(nome_especie, classe_taxonomica, classificacao):
        match classificacao:
            case 'Vertebrado':
                if classe_taxonomica.lower() == 'ave':
                    response = str(input(f'A espécie {nome_especie} é carnívoro? (S/N): ')).lower()
                    if response == 's'.lower():
                        print(f'{nome_especie} é uma ave e é um carnívoro.')
                    else:
                        print(f'{nome_especie} é uma ave e não é carnívoro, então é onívoro.')
                elif classe_taxonomica.lower() == 'mamifero':
                    response = str(input(f'A espécie {nome_especie} é onivoro? (S/N): ')).lower()
                    if response == 's'.lower():
                        print(f'{nome_especie} é um mamífero e é onívoro.')
                    else:
                        print(f'{nome_especie} é mamífero e não é onívoro, então é herbivoro.')
                else:
                    print(f'{nome_especie} não é uma ave e nem é um mamífero.')
            case 'Invertebrado':
                if classe_taxonomica.lower() == 'inseto':
                    response = str(input(f'A espécie {nome_especie} é hematofago? (S/N): ')).lower()
                    if response == 's'.lower():
                        print(f'{nome_especie} é um inseto e é hematofago.')
                    else:
                        print(f'{nome_especie} é um inseto e não é hematogafo, então é herbivoro.')
                elif classe_taxonomica.lower() == 'anelido':
                    response = str(input(f'A espécie {nome_especie} é hematofago? (S/N): ')).lower()
                    if response == 's'.lower():
                        print(f'{nome_especie} é um anelido e é hematofago.')
                    else:
                        print(f'{nome_especie} é um anelido e não é um hematofago, então é onivoro.')
        return f'{nome_especie} é {classe_taxonomica}'
    
    nome_especie = str(input('Informe o nome da espécie: '))
    classe_taxonomica = str(input('Informe a classe taxonômica: '))
    classificacao = str(input('Vertebrado ou Invertebrado: '))
    
    print(verification(nome_especie, classe_taxonomica, classificacao))
    
    # Professor, sei que passei do praso da entrega desta questão,
    # mas tive tempo de resolvê-la.
    `
  }
];

export default cardsData;