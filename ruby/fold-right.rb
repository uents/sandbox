
def foo
  yield(1, 2)
end

def bar(e)
  r = e
  r = yield(1, 2)
  r
end

module Enumerable
  def baz(e)
    r = e
    reverse_each do |item|
      r = yield(r, item)
    end
    r
  end
end

####

module Enumerable
  def foldr(*arg)
    e = self.clone
    if arg.empty?
      memo = self.last
      e.pop
    else
      memo = arg[0]
    end

    e.reverse_each do |item|
      memo = yield(item, memo)
    end      
    memo
  end
end

def cons(a, d)
  [a].push(d)
end

def list(*v)
  v.foldr(nil) { |memo, item| cons(memo, item) }
end


