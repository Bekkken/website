import Link from 'next/link'

export default function Header() {
  const headerStyles = {
    navbutton: {
      marginTop: '20px',
    },
    myul: {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
      overflow: 'hidden',
      backgroundColor: '#333',
    },
    myli: {
      float: 'left',
    },
    mylink: {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
    },
  };

  return (
    <div>
      <ul style={headerStyles.myul}>
        <li style={headerStyles.myli}><Link href="/" style={headerStyles.mylink}>Home</Link></li>
        <li style={headerStyles.myli}><Link href="/alltodos" style={headerStyles.mylink}>All Todos</Link></li>
        <li style={headerStyles.myli}><Link href="/addTodo" style={headerStyles.mylink}>Add Todo</Link></li>
        <li style={headerStyles.myli}><Link href="/deleteTodo" style={headerStyles.mylink}>Delete Todo</Link></li>
        <li style={headerStyles.myli}><Link href="/searchTodo" style={headerStyles.mylink}>Search Todo</Link></li>
        <li style={headerStyles.myli}><Link href="/updateTodo" style={headerStyles.mylink}>Update Todo</Link></li>
      </ul>
    </div>
  );
}
