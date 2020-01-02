# https://www.youtube.com/watch?v=2i2N_Qo_FyM&list=PLEbnTDJUr_If_BnzJkkN_J0Tl3iXTL8vq&index=4

## introduction to OS

操作系统的作用：

1. 操作系统将代码与硬件的交互隔离开，通过系统调用的形式将服务提供给上层使用。
2. 管理计算机的资源
3. 管理内存、进程、文件以及安全

操作系统的分类：

1. 批处理操作系统 batch os（按顺序执行每个任务，执行完毕才切换任务）
2. 多任务操作系统 multiprogramming（当某个任务进入IO等待状态，CPU就切换任务执行）提高CPU使用效率   without preemption
3. 多任务操作系统 multitasking（按顺序，每个任务轮流使用CPU，而不是等到进入IO状态才切换，相较于第2个拥有优先级概念）with preemption
4. 多进程操作系统 multiprocessing（拥有多个CPU，可以将每个CPU的使用策略与上面的类型进行组合）
5. 实时操作系统 realtime（对任务有严格的时间限制，超过某个时间则任务的结果失去价值）

## Process, PCB and Attributes

什么是process？

程序的执行代码存储在硬盘中，当操作系统开始执行这段程序时，需要将代码加载到内存中，而这一步在内存中创建的结构，就叫进程。

进程在内存中的结构：

1. 栈 stack
2. 堆 heap
3. 静态变量和全局变量
4. 源代码

process control block (PCB)：

1. process id 用于标识不同的进程
2. program counter 用于记录进程中代码目前的执行位置
3. process state 用于标识当前进程的运行状态
4. priority 用于进程调度的优先级
5. general purpose registers 用于保存当前执行状态下的通用寄存器中的值，便于进程切换时恢复现场
6. list of open files 进程已经打开的正在读取或写入的文件
7. list of open devices 进程相关的设备
8. protection

PCB在操作系统中以链表的形式。

PCB又被称为上下文(context)。

## Process States and Multiprogramming

进程的状态：

1. new 准备从硬盘将代码加载到内存
2. ready 代码已经从硬盘加载到了内存
3. run 正在执行，如果只有一个CPU，则只会有一个进程处于运行状态
4. block or wait 当程序需要进行IO操作，此时不需要CPU进行运算
5. termination or completion 将进程相关的空间全部进行回收
6. suspend ready 被挤出内存，保存在硬盘中的ready PCB
7. suspend wait or suspend block

对进程的操作：

1. creation
2. scheduling
3. execating
4. killing/delete

multiprogramming _________with preemtion  系统会主动调度进程
                  |_______without preemtion
