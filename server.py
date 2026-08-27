import http.server
import socketserver

# 强制修正 .svg 的 MIME 类型（Windows 注册表常将其误报为 image/svg）
http.server.SimpleHTTPRequestHandler.extensions_map.update({
    '.svg': 'image/svg+xml',
})

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

socketserver.TCPServer.allow_reuse_address = True

if __name__ == '__main__':
    with socketserver.TCPServer(('0.0.0.0', 8000), NoCacheHTTPRequestHandler) as httpd:
        print('Serving on http://localhost:8000/  (no-cache enabled)')
        httpd.serve_forever()
