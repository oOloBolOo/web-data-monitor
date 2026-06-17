<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Funkcja symulująca zrzut danych z wielu czujników/węzłów (generuje spory payload ~50KB)
function generateEdgeData() {
    $nodes = [];
    // Generowanie 200 węzłów brzegowych
    for ($i = 0; $i < 200; $i++) {
        $nodes[] = [
            'node_id' => 'EDGE_N_' . str_pad($i, 4, '0', STR_PAD_LEFT),
            'status' => rand(0, 100) > 95 ? 'OFFLINE' : 'ONLINE', // 5% szans na awarię
            'telemetry' => [
                'cpu_load_pct' => round(rand(1000, 9900) / 100, 2),
                'mem_alloc_mb' => rand(1024, 8192),
                'latency_ms' => rand(5, 120),
                'buffer_size_b' => rand(256, 8192)
            ],
            'last_heartbeat' => time() - rand(0, 30)
        ];
    }
    return $nodes;
}

// "Memory-efficient logic" z Twojego podania - w środowisku produkcyjnym 
// tu znajdowałoby się strumieniowe parsowanie wejściowego payloadu, np. przez JsonMachine.
// Tutaj odpowiadamy zoptymalizowanym wyjściem.
$response = [
    'sys_timestamp' => time(),
    'active_connections' => 200,
    'data_stream' => generateEdgeData()
];

echo json_encode($response, JSON_UNESCAPED_SLASHES);
?>