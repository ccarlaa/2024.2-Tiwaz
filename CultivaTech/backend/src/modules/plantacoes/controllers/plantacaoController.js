const plantacaoService = require('../services/plantacaoService');

// Cadastrar Plantação
const cadastrarPlantacao = async (req, res) => {
  try {
    const { nome, tipo, areaPlantada, quantidadePlantada, dataPlantio, custoInicial } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !tipo || (!areaPlantada && !quantidadePlantada) || !dataPlantio || !custoInicial) {
      return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos!' });
    }

    // Chama o serviço para cadastrar a plantação
    const novaPlantacao = await plantacaoService.cadastrarPlantacao({
      nome,
      tipo,
      areaPlantada: areaPlantada || null,
      quantidadePlantada: quantidadePlantada || null,
      dataPlantio,
      custoInicial,
    });

    res.status(201).json({
      message: 'Plantação cadastrada com sucesso!',
      plantacao: novaPlantacao,
    });
  } catch (error) {
    console.error('Erro ao cadastrar plantação:', error.message);
    res.status(500).json({ error: 'Erro ao cadastrar plantação!' });
  }
};

// Listar Plantações
const listarPlantacoes = async (req, res) => {
  try {
    // Chama o serviço para listar todas as plantações
    const plantacoes = await plantacaoService.listarPlantacoes();
    res.status(200).json(plantacoes);
  } catch (error) {
    console.error('Erro ao listar plantações:', error.message);
    res.status(500).json({ error: 'Erro ao listar plantações!' });
  }
};

// Atualizar Plantação
const atualizarPlantacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, tipo, areaPlantada, quantidadePlantada, dataPlantio, custoInicial } = req.body;

    // Chama o serviço para atualizar a plantação
    const plantacaoAtualizada = await plantacaoService.atualizarPlantacao(id, {
      nome,
      tipo,
      areaPlantada: areaPlantada || null,
      quantidadePlantada: quantidadePlantada || null,
      dataPlantio,
      custoInicial,
    });

    if (!plantacaoAtualizada) {
      return res.status(404).json({ error: 'Plantação não encontrada!' });
    }

    res.status(200).json({
      message: 'Plantação atualizada com sucesso!',
      plantacao: plantacaoAtualizada,
    });
  } catch (error) {
    console.error('Erro ao atualizar plantação:', error.message);
    res.status(500).json({ error: 'Erro ao atualizar plantação!' });
  }
};

// Excluir Plantação
const excluirPlantacao = async (req, res) => {
  try {
    const { id } = req.params;

    // Chama o serviço para excluir a plantação
    const plantacaoExcluida = await plantacaoService.excluirPlantacao(id);

    if (!plantacaoExcluida) {
      return res.status(404).json({ error: 'Plantação não encontrada!' });
    }

    res.status(200).json({ message: 'Plantação excluída com sucesso!' });
  } catch (error) {
    console.error('Erro ao excluir plantação:', error.message);
    res.status(500).json({ error: 'Erro ao excluir plantação!' });
  }
};

module.exports = {
  cadastrarPlantacao,
  listarPlantacoes,
  atualizarPlantacao,
  excluirPlantacao,
};
