type CategoryPageProps = {
  params: {
    categoryId: string;
  };
};

export default async function CategoryPage(props: CategoryPageProps) {
  return (
    <div>
      {props.params.categoryId}
    </div>
  )
}