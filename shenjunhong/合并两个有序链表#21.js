/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  useEffect (() =>  {
        fetchSomething().then (
          result => setState( result ));
      },[]);

      {  return  ( 
          <Suspense fallback =
            {
            < h1 > Loading profile ...</ h1 >
            }>
              < ProfileDetails />
          </ Suspense > );
      }
        
      function  ProfileDetails () {
        // Try to read user info, although it might not have loaded yet
        const user   = resource.user.read ();
        return <h1> { user . name }</ h1 >;
      }
      function
 
      App () {
        const [ resource , setResource ]  = useState ( initialResource );
        const [ startTransition , isPending ] = useTransition ({
            timeoutMs : 3000 ,
        });
      }
}