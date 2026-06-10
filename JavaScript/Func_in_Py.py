#1 WAP to remove duplicate value from a listcollection without type casting
# a=[1,1,1,1,1,5,5,5]
# # print(list(set(a)))
# out=[]
# for i in a:
#     if i not in out:
#         out+=[i]
# print(out)

# n= int(input())
# x='DUMADU'
# for i in range(n):
#     print(' '*1+' *'*(i+1)+x[i])
    # for j in x:
    #     if i==1 and j==1:
    #         print(' *'*1 + j)
    #         break
    #     else:
    #         print(' '*1+' *'*i)
    #         break
    

# def main(n,st=''):


# n=5
# st='DUMADU'
# ind,m,i1,i2=0,0,0,0
# ss1=st[:4]
# ss2=st[4:]
# for i in range(1,n+1):
#     for j in range(1,n+1):
#         if i>=j:
#             if j==2 and i1<len(st):
#                 print(ss1[i1],end=' ')
#                 i1 +=1
#             elif (i in (3,4) and j == 3 ) and i2 < len(st):
#                 print(ss2[i2],end=' ')
#                 i2+=1
#             else:
#                 print('*',end=' ')
#     print()

# for i in range(70-1,70):
#     for j in range(65,70):
#         print(chr(i),end=' ')
#     print()


# x='yellow yellow dirty fellow'
# y=x.split()
# print(y)
# d={}
# for i in y:
#     c=0
#     for j in y:
#         if i==j:
#             c+=1
#     d[c]=[i]
# print(d)
##
##x=eval(input('enter:'))
##out={}
##for i in x:
##    if type(i)==int:
##        continue
##    elif type(i)==float:
##        out[i]=str(i)[-1]
##    elif type(i)==str:
##        out[i]==i[0]+i[-1]
##print(out)



# x=eval(input('enter:'))
# out={}
# for i in x:
    
#     if type(i)==float:
#         out[i]=str(i)[-1]
#     elif type(i)==str:
#         out[i]=i[0]+i[-1]
# print(out)

# GV
#1.1

# x=6
# y=5

# def upper(st,si=0,ei=0):
#     if ei==0:
#         ei=len(st)-1
#     out=''
#     for i in range(len(st)):
#         if si<=i<=ei:
#             out+=st[i]
#     print(out)
# upper('happy birthday',2,6)


# def armStrong():
#     arr=[]
#     for n in range(1,100000):
# # n=int(input("Enter an NUM: "))
#         tc=str(n)
#         out=0
#         for i in tc:
#             # print(i)
#             out+=int(i)**len(tc)
#         if n==out:
#             arr+=[out]
# res=armStrong()
# print(res)

# def armStrong():
#     arr = []
#     for n in range(1, 100000):
#         tc = str(n)
#         out = 0
#         for i in tc:
#             out += int(i) ** len(tc)
#         if n == out:
#             arr.append(out)
#     return arr

# res = armStrong()
# print(res)



# at='   hsdhhs  '
# print(at.split())
# print(at.strip())
# print(at.join('$'))
# print(at)

def sum_single(n):
    if len(str(n))==1:
        return n
    s=0
    for i in str(n):
        s+=int(i)
    return sum_single(s)
print(f'uni_digit of given num: ',sum_single(372))

def sumOfIntegersInList(li):
    s=0
    for i in li:
        if type(i)==int:
            s+=i
        elif type(i) in (list,set,dict,tuple):
            s+=sumOfIntegersInList(i)
    return s
print(f'sum of integer in list: ', sumOfIntegersInList(eval(input('enter an list:'))))

    