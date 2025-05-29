# NativeByteArray

Byte[]的封送类型,指针需要送回给NativeAPI释放

| 字段名    | 类型     | 说明        |
|--------|--------|-----------|
| Length | int    | 字节数组的长度   |
| Data   | IntPtr | 指向字节数据的指针 |