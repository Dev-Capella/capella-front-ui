import { ParsedUrlQuery } from "querystring";

interface ProductPageParams extends ParsedUrlQuery {
  code: string;
}

export default function Products({ params }: { params: ProductPageParams }) {
  return (
    <div>
      <div>
        {params.code} nolu Product 
      </div>
    </div>
  )
}
