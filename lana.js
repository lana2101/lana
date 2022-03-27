public interface PagingAndSortingRepository<T, ID extends Serializable> 
  extends CrudRepository<T, ID> {

  Iterable<T> findAll(Sort sort);

  Page<T> findAll(Pageable pageable);
}
