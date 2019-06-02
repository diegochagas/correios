import axios from 'axios';

const ViaCEPAPI = async CEP => await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);

export default ViaCEPAPI;