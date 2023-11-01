# import webbrowser 
# import time 
 
# url = 'http://www.mattcole.us/' 
# url2 = 'http://facebook.com/' 
# url3 = 'https://gab.ai/home' 
# url4 = 'https://duckduckgo.com/' 
 
# chrome_path = 'C:/Program Files/Google/Chrome/Application/chrome.exe %s' 
 
# webbrowser.get(chrome_path).open(url) 
# time.sleep(2) 
# webbrowser.get(chrome_path).open_new_tab(url2) 
# time.sleep(2) 
# webbrowser.get(chrome_path).open_new_tab(url3) 
# time.sleep(2) 
# webbrowser.get(chrome_path).open_new_tab(url4)

from selenium import webdriver
driver = webdriver.Chrome()
print (driver.current_url)