const produtos = [
  {
    id_produto: 1,
    descricao_produto: "Gta v",
    caminho_da_imagem: "../imagens/gta_V.webp",
    valor_unitario: 89.90,
    id_secao: 1,
    nome_secao: "Ação"
  },
  {
    id_produto: 2,
    descricao_produto: "LEGO_BATMAN",
    caminho_da_imagem: "../imagens/LEGO_BATMAN_O_LEGADO_DO_CAVALEIRO_DAS_TREVAS.webp",
    valor_unitario: 89.49,
    id_secao: 1,
    nome_secao: "Ação"
  },
  {
    id_produto: 3,
    descricao_produto: "RESIDENT EVIL 4",
    caminho_da_imagem: "../imagens/RESIDENT_EVIL_4_REMAKE.WEBP",
    valor_unitario: 89.49,
    id_secao: 3,
    nome_secao: "Suspense"
  },
  {
    id_produto: 4,
    descricao_produto: "GHOST",
    caminho_da_imagem: "../imagens/GHOST.webp",
    valor_unitario: 89.99,
    id_secao: 1,
    nome_secao: "Ação"
  },
  {
    id_produto: 5,
    descricao_produto: "LORDS_FALLEN",
    caminho_da_imagem: "../imagens/LORDS_FALLEN.webp",
    valor_unitario: 98.90,
    id_secao: 1,
    nome_secao: "Ação"
  },
  {
    id_produto: 6,
    descricao_produto: "THELAST II",
    caminho_da_imagem: "../imagens/THELAST II.webp",
    valor_unitario: 5.79,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 7,
    descricao_produto: "UNCHATED",
    caminho_da_imagem: "../imagens/UNCHATED_COLEÇÃO_LEGADO_DOS_LADRÕES.webp",
    valor_unitario: 109.90,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 8,
    descricao_produto: "THELAST OF US I",
    caminho_da_imagem: "../imagens/THELAST OF US PART I.webp",
    valor_unitario: 110.90,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 9,
    descricao_produto: "WITCHER",
    caminho_da_imagem: "../imagens/WITCHER.jpg",
    valor_unitario: 103.99,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 10,
    descricao_produto: "ALLAN WAKE II",
    caminho_da_imagem: "../imagens/ALLAN WAKE II.jpg",
    valor_unitario: 99.99,
    id_secao: 3,
    nome_secao: "Suspense"
  },
  {
    id_produto: 11,
    descricao_produto: "BLACK MYTH",
    caminho_da_imagem: "../imagens/BLACK MYTH.jpg",
    valor_unitario: 123.29,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 12,
    descricao_produto: "BATTLEFIELD 6",
    caminho_da_imagem: "../imagens/BATTLEFIELD_TM_6.webp",
    valor_unitario: 8.99,
    id_secao: 1,
    nome_secao: "Ação"
  },
  {
    id_produto: 13,
    descricao_produto: "CRIMSON DESET",
    caminho_da_imagem: "../imagens/CRIMSON DESET.jpg",
    valor_unitario: 189.90,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 14,
    descricao_produto: "MORTAL 11 COMBAT",
    caminho_da_imagem: "../imagens/MORTAL11COMBAT.jpg",
    valor_unitario: 22.99,
    id_secao: 1,
    nome_secao: "Ação"
  },
  {
    id_produto: 15,
    descricao_produto: "FC 26",
    caminho_da_imagem: "../imagens/FC26.webp",
    valor_unitario: 109.90,
    id_secao: 4,
    nome_secao: "Organizadores"
  },
  {
    id_produto: 16,
    descricao_produto: "HORIZON",
    caminho_da_imagem: "../imagens/HORIZON.jpg",
    valor_unitario: 154.49,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 17,
    descricao_produto: "SPIDER-MAN 2",
    caminho_da_imagem: "../imagens/SPIDER-MAN 2.webp",
    valor_unitario: 223.49,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 18,
    descricao_produto: "GTA VI",
    caminho_da_imagem: "../imagens/gta VI.jpg",
    valor_unitario: 189.79,
    id_secao: 1,
    nome_secao: "Ação"
  },
  {
    id_produto: 19,
    descricao_produto: "GOD OF WAR RAGNAROK",
    caminho_da_imagem: "../imagens/GOD OF WAR RAGNAROK.webp",
    valor_unitario: 108.90,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 20,
    descricao_produto: "FIFA 23",
    caminho_da_imagem: "../imagens/FIFA 23.jpg",
    valor_unitario: 95.99,
    id_secao: 4,
    nome_secao: "Organizadores"
  },
  {
    id_produto: 21,
    descricao_produto: "SPIDER-MAN_MORALES",
    caminho_da_imagem: "../imagens/SPIDER-MAN_MORALES.webp",
    valor_unitario: 102.90,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 22,
    descricao_produto: "WOLVERINE",
    caminho_da_imagem: "../imagens/WOLVERINE.webp",
    valor_unitario: 6.99,
    id_secao: 1,
    nome_secao: "Ação"
  },
  {
    id_produto: 23,
    descricao_produto: "RED DEAD II",
    caminho_da_imagem: "../imagens/RED DEAD II.webp",
    valor_unitario: 99.99,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 24,
    descricao_produto: "ASSASIN",
    caminho_da_imagem: "../imagens/ASSASIN.webp",
    valor_unitario: 7.49,
    id_secao: 2,
    nome_secao: "Aventura"
  },
  {
    id_produto: 25,
    descricao_produto: "RESIDENT EVIL",
    caminho_da_imagem: "../imagens/RESIDENT EVIL.webp",
    valor_unitario: 189.99,
    id_secao: 3,
    nome_secao: "Suspense"
  }
];

export { produtos };