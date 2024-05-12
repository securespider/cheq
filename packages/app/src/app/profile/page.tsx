
export default function profile() {

  return (
    <div className='flex-column align-center '>
      <h2 className='text-2xl mb-2'>Profile Page</h2>
      <p>This page shows all your items.</p>
    <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr>
                            <td>101</td>
                            <td>TV</td>
                            <td>0xbdaa2e617dbd889bd84253f7c0270dd81bd9c394c24e6622c1779301fc37d645</td>
                        </tr>
                        <tr>
                            <td>223</td>
                            <td>Ball</td>
                            <td>0x414c33cddd6ac92f24e2ac430d878809926f757d143740e344fe7333ea4dea02</td>
                        </tr>
                        <tr>
                            <td>315</td>
                            <td>Book</td>
                            <td>0x902aa317b18a04261bfe25b30feeb69a4793bbcffc9019584e5af2796047fa52</td>
                        </tr>
                </tbody>
            </table>
    </div>
    </div>

  )
}