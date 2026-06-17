import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [streamData, setStreamData] = useState(null);
  const [error, setError] = useState(null);

  const fetchStream = async () => {
    try {
      // W środowisku dev zakładamy, że PHP działa na porcie 8000
      const response = await fetch('http://localhost:8000/api/stream.php');
      if (!response.ok) throw new Error('Network stream interrupted');
      const data = await response.json();
      setStreamData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchStream();
    // Odpytywanie (polling) co 2 sekundy symulujące live-data
    const interval = setInterval(fetchStream, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="monitor-root">
      <header className="sys-header">
        <h1>[SYS] INTERACTIVE WEB-DATA MONITOR</h1>
        <div className="status-bar">
          <span className="blink">LIVE // EDGE NODES</span>
          <span>PKT_SIZE: {streamData ? '~50KB' : '0KB'}</span>
        </div>
      </header>

      {error && <div className="sys-error">ERR: {error}</div>}

      <main className="node-grid">
        {streamData?.data_stream.map((node) => (
          <div key={node.node_id} className={`node-card ${node.status === 'OFFLINE' ? 'offline' : ''}`}>
            <div className="node-header">
              <span className="node-id">{node.node_id}</span>
              <span className="node-status">[{node.status}]</span>
            </div>
            <div className="node-metrics">
              <div>CPU: {node.telemetry.cpu_load_pct}%</div>
              <div>MEM: {node.telemetry.mem_alloc_mb}MB</div>
              <div>LAT: {node.telemetry.latency_ms}ms</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;