import './Catalog.scss';
import CatalogCards from './Catalog-Cards/Catalog-Cards';
import variables from '../variables.modules.scss';

const Catalog = () => {
  return (
    <section class="catalog wrap" id="catalog">
      <h2 class="headers-h2">Каталог</h2>
      <CatalogCards/>
    </section>
  )
}

export default Catalog;