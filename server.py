from bottle import route, run, static_file

@route('/<filename:path>')
def server_static(filename):
        return static_file(filename, root='.')

run(host="0.0.0.0", port=12345)
